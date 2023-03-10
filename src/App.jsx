import CompanyLogo from './Components/CompanyLogos/CompanyLogo';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import SectionFive from './Components/SectionFive/SectionFive';
import SectionFour from './Components/SectionFour/SectionFour';
import SectionOne from './Components/SectionOne/SectionOne';
import SectionSeven from './Components/SectionSeven/SectionSeven';
import SectionSix from './Components/SectionSix/SectionSix';
import SectionTree from './Components/SectionTree/SectionTree';
import SectionTwo from './Components/SectionTwo/SectionTwo';



function App() {
	return (
		<>
			<Header />
			<SectionOne />
			<SectionTwo />
			<SectionTree />
			<SectionFour />
			<SectionFive />
			<CompanyLogo />
			<SectionSix />
			<SectionSeven />
			<Footer />
		</>
	)
}

export default App;
