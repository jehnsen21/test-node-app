import express, { Request, Response } from "express";
import { ProductService } from "../services/product.service";


const router = express.Router();
const productService = new ProductService();

// GET: Retrieve all products
router.get("/", async (req, res) => {

  try {
    const products = await productService.list();
    res.status(200).json({ products });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    res.status(500).json({ message: errorMessage });
  }
});

// POST: Create a new product
router.post("/", async (req, res) => {
    const product = req.body;
    try {
        const response = await productService.create(product);
       if(!response) {
          res.status(400).json({ message: "Product creation failed" });
       } else {
          res.status(201).json({ product: response });
       }
        
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        res.status(500).json({ message: errorMessage });
    }
});

// PUT: Update an existing product by ID
router.put("/:id", async (req: Request, res: Response) => {
  
    try {
        const product = await productService.update(req.params.id, req.query.categoryId as string, req.body);
        res.status(200).json({ product });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        res.status(500).json({ message: errorMessage });
    }
});

// GET: Retrieve a single product by ID and category
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const product = await productService.get(req.params.id, req.query.categoryId as string);
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});


// DELETE: Delete a product by ID
router.delete('/:id', async (req: Request, res: Response) : Promise<void> => {
  try {
    await productService.delete(req.params.id, req.query.categoryId as string);
    res.status(204).send('Deleted successfully');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      res.status(500).json({ message: errorMessage });
  }
});

export default router;