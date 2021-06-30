export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/présentation.jpg' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Présentation</h2>
              <p>{`Le cardiologue est un médecin spécialisé dans les maladies du cœur ou cardio-vasculaires : insuffisance cardiaque, hypertension artérielle, infarctus du myocarde, troubles du rythme cardiaque, embolie pulmonaire, problèmes de circulation sanguine…`}</p>
              <h3>Pourquoi Nous?</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    <li>
                    multiples consultation
                    </li>
                    <li>
                    expérience
                    </li>
                    <li>expertisme
                    </li>
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    <li> dynamisme

                    </li>
                    <li>professionalisme
                    </li>
                    <li>
                      adaptabilité
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
