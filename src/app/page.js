import Link from "next/link";


export default function Home() {
  return (
    <main className="container px-4 pt-5">
     <h1>Bienvenue sur le Blog test</h1>

     <div className="row mt-5">

      <div className="col-12 col-sm-6">
        <div className="card w-100 h-100">
          <div className="card-body">
            <h5 className="card-title">Articles</h5>
            <h6 className="card-subtitle mb-2 text-muted">Que des articles de qualité</h6>
            <Link href="/blog">Lire les articles</Link> 
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6">
        <div className="card w-100 h-100">
          <div className="card-body">
            <h5 className="card-title">Membres</h5>
            <h6 className="card-subtitle mb-2 text-muted">Que des membres de qualité aussi</h6>
            <Link href="/blog">Voir les membres</Link> 
          </div>
        </div>
      </div>

     </div>

    </main>
  )
}
