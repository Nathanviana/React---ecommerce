import "./styles.css";

function CadastroProduto() {
  return (
    <div className="cadastro-produto-bg">
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ width: '400px', borderRadius: '10px' }}>
                <h3 className="text-2xl font-bold text-center mb-6">Cadastrar Produto</h3>
                <form className="flex items-center flex-col space-y-2">
                    <div className="w-full flex items-center relative mx-0 md:mx-3">
                        <input type="text" className="w-full min-w-56 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 focus:outline-none focus:ring focus:ring-gray-300 pl-10" placeholder="Nome do Produto" />
                    </div>
                    <div className="w-full flex items-center relative mx-0 md:mx-3">
                        <textarea className="form-control w-full min-w-56 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 focus:outline-none focus:ring focus:ring-gray-300 pl-10" placeholder="Descrição do Produto" />
                    </div>
                    <div className="w-full flex items-center relative mx-0 md:mx-3">
                        <input type="number" className="w-full min-w-56 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 focus:outline-none focus:ring focus:ring-gray-300 pl-10" placeholder="Preço" />
                    </div>
                    <button type="submit" className="inline-flex items-center justify-center px-5 py-2.5 md-1 bg-gray-800 text-white text-sm font-medium rounded-md shadow transition duration-200 hover:bg-gray-900 hover:shadow-md focus:ring-4 focus:ring-gray-300 focus:outline-none w-full !mt-5 !text-base !rounded-full">Adicionar Produto</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CadastroProduto;