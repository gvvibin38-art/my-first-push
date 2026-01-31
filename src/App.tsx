
import './App.css'
import ProductCard from './components/ProductCard'

type Ingredient = { name: string; amount: string; dailyValue?: string }

type Product = {
  id: string
  name: string
  tagline: string
  price: string
  description: string
  ingredients: Ingredient[]
}

const sampleProducts: Product[] = [
  {
    id: 'p1',
    name: 'Vitality Multivitamin',
    tagline: 'Daily adult coverage for energy & immunity',
    price: '$19.99',
    description:
      'A balanced multivitamin formulated for adults to support daily nutrient needs and immune health.',
    ingredients: [
      { name: 'Vitamin A (as beta-carotene)', amount: '900 mcg', dailyValue: '100% DV' },
      { name: 'Vitamin C (as ascorbic acid)', amount: '90 mg', dailyValue: '100% DV' },
      { name: 'Vitamin D3 (cholecalciferol)', amount: '25 mcg (1000 IU)', dailyValue: '125% DV' },
      { name: 'Vitamin B12 (methylcobalamin)', amount: '6 mcg', dailyValue: '250% DV' },
      { name: 'Zinc (gluconate)', amount: '11 mg', dailyValue: '100% DV' },
    ],
  },
  {
    id: 'p2',
    name: 'Omega-3 Adult Blend',
    tagline: 'EPA + DHA for heart and brain support',
    price: '$24.50',
    description:
      'Concentrated fish oil providing high levels of EPA and DHA in a small softgel.',
    ingredients: [
      { name: 'Total Omega-3s', amount: '1000 mg' },
      { name: 'EPA (Eicosapentaenoic acid)', amount: '600 mg' },
      { name: 'DHA (Docosahexaenoic acid)', amount: '300 mg' },
      { name: 'Vitamin E (as mixed tocopherols)', amount: '2 mg' },
    ],
  },
  {
    id: 'p3',
    name: 'Magnesium Calm',
    tagline: 'Supports relaxation and muscle health',
    price: '$15.00',
    description:
      'Magnesium glycinate for gentle absorption and night-time relaxation support.',
    ingredients: [
      { name: 'Magnesium (as glycinate)', amount: '200 mg', dailyValue: '48% DV' },
      { name: 'Calcium', amount: '50 mg', dailyValue: '4% DV' },
    ],
  },
]

export default function App() {
  return (
    <div className="app-root">
      <header className="hero">
        <div>
          <h1>Adult Health Supplements</h1>
          <p className="subtitle">Products designed for daily adult coverage — ingredient labels included</p>
        </div>
        <div className="hero-cta">
          <button className="primary">Shop All</button>
        </div>
      </header>

      <main>
        <section className="product-grid">
          {sampleProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      </main>
    </div>
  )
}
