import './Personalcard.css';
import imgpersonal from '../src/img/pic.png';

const Personalcard =()=>{
  return(
    <main>
    <section class="profile">
      <div class="profile__container">
        <article class="card">
          <header class="card__header">
            <div class="card__header-img-container">
              <img src={imgpersonal} alt="Carmen Urízar" class="card__header-img"/>
            </div>
          </header>
          <section class="card__body">
            <h1 class="card__body-title">Carmen Urízar</h1>
            <h2 class="card__body-keywords">Designer & Developer</h2>
            <p class="card__body-presentation">Apasionada por el diseño. Desarrolladora eLearning. Estudiante de Desarrollo Web.</p>
          </section>
          <footer class="card__footer">
            <nav class="card__footer-nav-container">
              <ul class="card__fotter-nav-list">
                <li class="card__fotter-nav-item">
                  <a href="https://github.com/carmenuv" class="card__fotter-nav-icon fab fa-github"></a>
                </li>
                <li class="card__fotter-nav-item">
                  <a href="https://www.behance.net/carmenurizar" class="card__fotter-nav-icon fab fa-behance"></a>
                </li>
                <li class="card__fotter-nav-item">
                  <a href="https://www.facebook.com/carmen.urizar.valdivia/" class="card__fotter-nav-icon fab fa-facebook-f"></a>
                </li>
              </ul>
            </nav>
            <div class="card__footer-button-container">
              <a href="#" class="card__footer-button-link">Contáctame</a>
            </div>
          </footer>
        </article>
      </div>
    </section>
  </main>
  )
}

export default Personalcard;