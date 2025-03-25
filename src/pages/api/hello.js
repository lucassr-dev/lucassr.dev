export default function handler(req, res) {
  // Verificar o método HTTP
  if (req.method === 'GET') {
    // Retornar informações
    res.status(200).json({ name: 'Lucas Sousa Rosa' })
  } else if (req.method === 'POST') {
    // Processar dados enviados
    const { data } = req.body
    // Fazer algo com os dados...
    res.status(201).json({ message: 'Dados recebidos com sucesso', data })
  } else {
    // Método não permitido
    res.status(405).json({ message: 'Método não permitido' })
  }
}