import About from './components/about/About'
import Campus from './components/campus/Campus'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Programs from './components/programs/Programs'
import Title from './components/Title/Title'

const App = () => {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <div>
        <Title title="Our Programs" subtitle="What we offers"/>
        <Programs/>
       <About/>
       <Title title="Gallery" subtitle="Campus Photos"/>
       <Campus/>
       <Title title="TESTIMONIALS" subtitle="WHAT Patient SAYs"/>
       


      </div>
    </div>
  )
}

export default App