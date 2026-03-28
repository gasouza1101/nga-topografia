
export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <h1 className="font-bold">NGA Topografia</h1>
        <div className="space-x-4">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </div>
    </nav>
  );
}
