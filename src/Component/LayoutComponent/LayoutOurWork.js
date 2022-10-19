import '../Style/OurWork/LayoutOurWork.scss'

function LayoutOurWork() {

  const text_content = [
    "PageTraffic offers top-notch SEO and digital",
    "PageTraffic offers top-notch SEO.",
    "PageTraffic offers top-notch.",
    "PageTraffic offers top-notch SEO and."
  ]

  return (
    <section id='work'>
      <h1>OUR WORK FEATURED ON</h1>
      <div className='logo-work'>
        <img src='../../img/image/OurWork/work1.png'/>
        <img src='../../img/image/OurWork/work2.png'/>
        <img src='../../img/image/OurWork/work3.png'/>
        <img src='../../img/image/OurWork/work4.png'/>
        <img src='../../img/image/OurWork/work5.png'/>
      </div>
      <div className='content'>
        <div className='content-text'>
          <h3>HOW PAGETRAFFIC CREATES HYPER BUSINESS GROWTH</h3>
          <p>PageTraffic offers top-notch SEO and digital marketing solutions to help you rank high on search results, connect with.</p>
          <div className='content-text-list'>
            {
              text_content.map(item => {
                return (
                  <div className='content-text-list-item'>
                    <img src='../../img/icon/dot.png' />
                    <p>{item}</p>
                  </div>
                )
              })
            }
          </div>
          <div className='content-text-count'>
            <div className='content-text-count-audience'>
              <h3>1.9k</h3>
              <p>Total Audience</p>
            </div>
            <div className='content-text-count-project'>
              <h3>5.7k</h3>
              <p>Complete Project</p>
            </div>
          </div>
          <button>Explore Now</button>
        </div>
        <div className='content-icon'>
          <div className='content-icon-it1'>
            <div className='item1'>
              <div className='icon pink'><img src='../../img/icon/lead1.png' /></div>
              <h3>I Want Leads</h3>
              <p>Looking to get higher ROI by improving website.</p>
              <a href='#'>View more</a>
            </div>
            <div className='item2 '>
              <div className='icon blue'><img src='../../img/icon/lead2.png' /></div>
              <h3>I Want Leads</h3>
              <p>Looking to get higher ROI by improving website.</p>
              <a href='#'>View more</a>
            </div>
          </div>
          <div className='content-icon-it2'>
            <div className='item2'>
              <div className='icon blue'><img src='../../img/icon/lead2.png' /></div>
              <h3>I Want Leads</h3>
              <p>Looking to get higher ROI by improving website.</p>
              <a href='#'>View more</a>
            </div>
            <div className='item1 '>
              <div className='icon pink'><img src='../../img/icon/lead1.png' /></div>
              <h3>I Want Leads</h3>
              <p>Looking to get higher ROI by improving website.</p>
              <a href='#'>View more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LayoutOurWork;