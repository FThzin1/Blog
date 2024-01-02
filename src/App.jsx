import { useEffect, useState } from "react"
import "./components/styles/root.scss"
function App() {
  const [blog, SetBlog] = useState([
    {
      id: 0,
      data: "17 de ago, 2024",
      title: "GitHub agora permite fazer login sem precisar de senha",
      describe: "O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.",
    },
    {
      id: 1,
      data: "17 de ago, 2024",
      title: "GitHub agora permite fazer login sem precisar de senha",
      describe: "O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores."
    },
    {
      id: 2,
      data: "17 de ago, 2024",
      title: "GitHub agora permite fazer login sem precisar de senha",
      describe: "O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores."
    }
  ])
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLike = (id) => {
    const updatedBlog = [...blog];
    const index = blog.findIndex(blog => blog.id === id)
    updatedBlog[index].active = !updatedBlog[index].active;
    localStorage.setItem(`active_${id}`, updatedBlog[index].active ? 'true' : 'false');
    SetBlog(updatedBlog);
  };

  const filteredBlogs = blog.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const loadLikes = () => {
      const updatedBlog = [...blog];
      updatedBlog.forEach((post, v) => {
        const index = blog.findIndex(blog => blog.id === post.id)
        const active = localStorage.getItem(`active_${index}`);
        updatedBlog[index].active = JSON.parse(active);
      });
      SetBlog(updatedBlog);
    };
  
    loadLikes();
  },[])
  return (
    <>
      <main>
      <header>
        <h1><span>Code</span>lândia</h1>
        <div className="input-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M16.1479 15.352L12.6274 11.8322C13.6478 10.6071 14.1566 9.03586 14.048 7.44521C13.9394 5.85456 13.2218 4.36702 12.0443 3.29202C10.8669 2.21702 9.32035 1.63734 7.72641 1.67357C6.13247 1.70979 4.61386 2.35913 3.48648 3.48651C2.3591 4.61389 1.70976 6.1325 1.67354 7.72644C1.63731 9.32038 2.21699 10.8669 3.29199 12.0444C4.36699 13.2218 5.85453 13.9394 7.44518 14.048C9.03583 14.1566 10.6071 13.6478 11.8322 12.6274L15.352 16.148C15.4043 16.2002 15.4663 16.2417 15.5346 16.27C15.6029 16.2983 15.6761 16.3128 15.75 16.3128C15.8239 16.3128 15.8971 16.2983 15.9654 16.27C16.0336 16.2417 16.0957 16.2002 16.1479 16.148C16.2002 16.0957 16.2417 16.0337 16.2699 15.9654C16.2982 15.8971 16.3128 15.8239 16.3128 15.75C16.3128 15.6761 16.2982 15.6029 16.2699 15.5346C16.2417 15.4663 16.2002 15.4043 16.1479 15.352ZM2.81248 7.87501C2.81248 6.87374 3.10939 5.89496 3.66566 5.06243C4.22194 4.22991 5.01259 3.58104 5.93764 3.19787C6.86269 2.8147 7.88059 2.71444 8.86262 2.90978C9.84465 3.10512 10.7467 3.58728 11.4547 4.29528C12.1627 5.00328 12.6449 5.90533 12.8402 6.88736C13.0355 7.86939 12.9353 8.88729 12.5521 9.81234C12.169 10.7374 11.5201 11.528 10.6876 12.0843C9.85503 12.6406 8.87625 12.9375 7.87498 12.9375C6.53278 12.936 5.24597 12.4022 4.29689 11.4531C3.34781 10.504 2.81397 9.21721 2.81248 7.87501Z" fill="#E07B67" />
          </svg>
          <input value={searchTerm} onChange={handleSearch} type="text" placeholder="Pesquisar no blog" />
        </div>
      </header>
      <section>
        {filteredBlogs.map((blog, index) => (
          <div index={index} className="card">
            <div className="curt">
              <h1>{blog.data}</h1>
              <button onClick={() => handleLike(blog.id)}>
                {blog.active ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18.75 7.34375C18.75 12.8125 10.6414 17.2391 10.2961 17.4219C10.2051 17.4708 10.1033 17.4965 10 17.4965C9.89665 17.4965 9.79492 17.4708 9.70391 17.4219C9.35859 17.2391 1.25 12.8125 1.25 7.34375C1.25145 6.05955 1.76223 4.82837 2.6703 3.9203C3.57837 3.01223 4.80955 2.50145 6.09375 2.5C7.70703 2.5 9.11953 3.19375 10 4.36641C10.8805 3.19375 12.293 2.5 13.9062 2.5C15.1904 2.50145 16.4216 3.01223 17.3297 3.9203C18.2378 4.82837 18.7486 6.05955 18.75 7.34375Z" fill="#E07B67" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M13.9062 2.5C12.293 2.5 10.8805 3.19375 10 4.36641C9.11953 3.19375 7.70703 2.5 6.09375 2.5C4.80955 2.50145 3.57837 3.01223 2.6703 3.9203C1.76223 4.82837 1.25145 6.05955 1.25 7.34375C1.25 12.8125 9.35859 17.2391 9.70391 17.4219C9.79492 17.4708 9.89665 17.4965 10 17.4965C10.1033 17.4965 10.2051 17.4708 10.2961 17.4219C10.6414 17.2391 18.75 12.8125 18.75 7.34375C18.7486 6.05955 18.2378 4.82837 17.3297 3.9203C16.4216 3.01223 15.1904 2.50145 13.9062 2.5ZM10 16.1563C8.57344 15.325 2.5 11.5383 2.5 7.34375C2.50124 6.39101 2.88026 5.47765 3.55396 4.80396C4.22765 4.13026 5.14101 3.75124 6.09375 3.75C7.61328 3.75 8.88906 4.55938 9.42188 5.85938C9.46896 5.97401 9.54907 6.07205 9.65201 6.14105C9.75494 6.21005 9.87607 6.2469 10 6.2469C10.1239 6.2469 10.2451 6.21005 10.348 6.14105C10.4509 6.07205 10.531 5.97401 10.5781 5.85938C11.1109 4.55703 12.3867 3.75 13.9062 3.75C14.859 3.75124 15.7724 4.13026 16.446 4.80396C17.1197 5.47765 17.4988 6.39101 17.5 7.34375C17.5 11.532 11.425 15.3242 10 16.1563Z" fill="#E07B67" />
                  </svg>
                )}
              </button>



            </div>
            <div className="txt">
              <h2>{blog.title}</h2>
              <h3>{blog.describe}</h3>
            </div>
          </div>
        ))}
      </section>
      <footer>
      </footer>
      </main>
    </>
  )
}

export default App
