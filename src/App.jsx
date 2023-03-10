import './App.scss';
import CompanyLogo from './Components/CompanyLogos/CompanyLogo';
import Header from './Components/Header/Header';
import SectionFive from './Components/SectionFive/SectionFive';
import SectionFour from './Components/SectionFour/SectionFour';
import SectionOne from './Components/SectionOne/SectionOne';
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
		</>
	)
}

export default App;
