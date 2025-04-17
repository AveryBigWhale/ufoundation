import Navigation from './Navigation'
import DonateButton from './DonateButton'

export default function Header() {
  return (
    <header className="fixed w-full bg-white z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <h1 className="text-2xl font-bold">U Foundation</h1>
        </div>
        <Navigation />
        <DonateButton />
      </div>
    </header>
  )
}