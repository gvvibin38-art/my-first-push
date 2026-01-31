import { useState } from 'react'
import './ProductCard.css'

type Ingredient = { name: string; amount: string; dailyValue?: string }

type Product = {
  id: string
  name: string
  tagline: string
  price: string
  description: string
  ingredients: Ingredient[]
}

export default function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false)

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setOpen(false)
    }
  }

  return (
    <article className="pcard">
      <div className="pcard-media" aria-hidden>
        <div className="pill">Supplement</div>
        <div className="img-placeholder">{product.name.split(' ')[0]}</div>
      </div>

      <div className="pcard-body">
        <h3 className="pcard-title">{product.name}</h3>
        <p className="pcard-tag">{product.tagline}</p>
        <p className="pcard-desc">{product.description}</p>
        <div className="pcard-row">
          <strong className="price">{product.price}</strong>
          <div className="actions">
            <button className="secondary" onClick={() => setOpen(true)}>
              View Ingredients
            </button>
            <button className="primary">Add to Cart</button>
          </div>
        </div>
      </div>

      {open && (
        <div 
          className="modal-overlay" 
          role="dialog" 
          aria-modal="true"
          onClick={handleOverlayClick}
        >
          <div className="modal">
            <header className="modal-header">
              <h4>Ingredient Label — {product.name}</h4>
              <button className="close" onClick={() => setOpen(false)}>&times;</button>
            </header>

            <section className="modal-body">
              <p className="serving">Serving Size: 1 capsule</p>
              <table className="supplement-facts">
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Amount</th>
                    <th>%DV</th>
                  </tr>
                </thead>
                <tbody>
                  {product.ingredients.map((ing, i) => (
                    <tr key={i}>
                      <td>{ing.name}</td>
                      <td>{ing.amount}</td>
                      <td>{ing.dailyValue ?? '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="disclaimer">Keep out of reach of children. Consult a healthcare professional before use.</p>
            </section>
          </div>
        </div>
      )}
    </article>
  )
}
