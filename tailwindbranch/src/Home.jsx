import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Section from "./components/section2";
import Example from "./components/disclosure/disclosure";
import Hero3 from "./components/hero3";
import Medicplants from "./components/medicplants";
import Banner from "./partials/Banner";
import { Feature } from "./pages/SmallBiz";
const Home = () => (
  <div className="bg-blk w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
    </div>

    <div className={`bg-plat ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        {/* <Stats /> */}
        
      </div>
    </div>
    
    <div className={`bg-plat ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Section/> */}
        
        <Business />
        <CardDeal />
        <Billing />
        <Medicplants />
        {/* <Testimonials /> */}
        {/* <Clients /> */}
        <CTA />
        <Highlight/>
        <CTA />
        <Technology/>
        <Hiring/>
        {/* <Example/> */}
        <Footer />
      <Banner/>
        
        
        
      </div>
    </div>
  </div>
);

export default Home;


function Highlight(params) {
  return(
    <>
     <h3 className={`text-xl font-poppins${styles.heading2} text-blk`}>EXPLORE </h3>
     <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
        <Feature
          title="PASSIVE INCOME"
          description="Boost Your Earnings By Acquiring More Land."
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="BUSINESS ASSISTANCE"
          description="Put Up Any Digital Land You Already Own For Sale To the Highest Bidder"
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="SHOP"
          description="Deduct All Maintainance And Service Fees From Your Total Earnings"
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="INSURED INVESTMENTS"
          description="Choose From a Variety Of Strains To Be Planted and Harvested By Proffesionals"
          image="https://via.placeholder.com/200x200"
        />
      </div>
    </>
  )
}
function Technology(params) {
  return(
    <>
     <h3 className={`text-xl font-poppins${styles.heading2} text-blk`}>Break Boundaries</h3>
     <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
        <Feature
          title="HIVE INITIATIVE"
          description="Boost Your Earnings By Acquiring More Land."
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="HIVE A.I"
          description="Put Up Any Digital Land You Already Own For Sale To the Highest Bidder"
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="DIGITAL FARMING"
          description="Deduct All Maintainance And Service Fees From Your Total Earnings"
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="Risk Management"
          description="Choose From a Variety Of Strains To Be Planted and Harvested By Proffesionals"
          image="https://via.placeholder.com/200x200"
        />
      </div>
    </>
  )
}
function Hiring(params) {
  return(
    <>
     <h3 className={`text-lg sm:text-xl font-poppins${styles.heading2} text-blk`}>Job Markets</h3>
     <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
        <Feature
          title="HIVE MIND"
          description="Boost Your Earnings By Acquiring More Land."
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="CO-PILOT"
          description="Put Up Any Digital Land You Already Own For Sale To the Highest Bidder"
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="AGENCY"
          description="Deduct All Maintainance And Service Fees From Your Total Earnings"
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="Grow For Us"
          description="Choose From a Variety Of Strains To Be Planted and Harvested By Proffesionals"
          image="https://via.placeholder.com/200x200"
        />
      </div>
    </>
  )
}