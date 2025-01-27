export default function Entry({profile}) {
  return (
    <>
      <div class="container p-0 vh-100" style={{ position: 'relative', top: '200px' }} id="entry">
        <div class="row text-center">
          <div class="col-md-12">
            <h2 class="head-sub-main text-light">I'm Mohammad, a {profile.JobTitle}</h2>
            <br></br>
            <a className="btn" href="#about">
              <h2 class="text-light">Get started with knowing about me</h2>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
