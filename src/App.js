import styled from 'styled-components';
import './App.css';
import Card from './components/Card';
import Container from './components/Container';
import * as Imgs from './includes/images';

function App() {
  return (
    <div className="App">
      <Container className="grid">
        <Card
          img={Imgs.APEX}
          alt="APEX App"
          header="APEX Web Application"
          description="It Is An HR Application"
          mainTech= "Reactjs"
          For="Taif-Alalmas Company"
          Keywords= "Reactjs, APIs, SaaS, ERP, Bilingual, NOT Responsive"
          url="http://web.apex-program.com/#/Ar/TAW/Start/Login/Democompany"
        />
        <Card
          img={Imgs.Restaurant}
          alt="Restaurant"
          header="Restaurant Web Site"
          description="A Web Site for Restaurant with Menu, On Line Booking, Blog, Newsletter, Working Hours, Counters"
          mainTech= "Reactjs"
          For="Challenging to Make a Copy of"
          originProject="http://bliccathemes.com/themes/pronto/demo1/"
          Keywords= "Reactjs, PSD to HTML"
          url="https://a-elnawawy.github.io/restaurant/"
          codeUrl="https://github.com/A-ElNawawy/restaurant"
        />
        <Card
          img={Imgs.Resume}
          alt="Resume"
          header="A Resume Website"
          description="It Is My First Website Ever I Made"
          mainTech= "Pure HTML & CSS"
          For="Challenging to Make a Copy of"
          originProject="https://raw.githubusercontent.com/A-ElNawawy/ResumeAfter/master/Images/focal-resume-psd-theme-image-2084focal-psd-theme.jpg"
          Keywords= "PSD to HTML, Responsive"
          url="https://a-elnawawy.github.io/ResumeAfter/"
          codeUrl="https://github.com/A-ElNawawy/ResumeAfter"
        />
        <Card
          img={Imgs.classic}
          alt="classic"
          header="A Portfolio Website for a Real Estate Company"
          description="It Is My Second Website Ever I Made"
          mainTech= "Pure HTML & CSS"
          For="Training"
          Keywords= "PSD to HTML, Responsive"
          url="https://a-elnawawy.github.io/ClassicAfter/"
          codeUrl="https://github.com/A-ElNawawy/classicAfter"
        />
        <Card
          img={Imgs.Glancer}
          alt="Glancer"
          header="The First Freelancer Site for Women Only"
          description="It Is My Third Website Ever I Made"
          mainTech= "Pure HTML & CSS"
          For="[ Elzero_Practice_07 ] It Is a Challenging Practice in Elzero Web School to Make "
          originProject="https://github.com/Dsooky/Elzero/blob/master/Elzero%20ui.pdf?fbclid=IwAR3vQ9P1mBL-6JCI_dyIe4qQRYIIrbG5RURWf9CXLXzDZ8qNjRDY4yB7-Wc"
          Keywords= "PSD to HTML, Responsive"
          url="https://a-elnawawy.github.io/GlancerAfter/"
          codeUrl="https://github.com/A-ElNawawy/GlancerAfter"
        />
        <Card
          img={Imgs.newMama}
          alt="New Mama"
          header="A Blog Targeting The New Mothers"
          description="A Blog With Newsletter Form Powered By Mailchimp, It Will Be Used As a Landing Page"
          mainTech= "Built on Ready Theme using Bootstrap"
          For="New Mama Team"
          Keywords= "Responsive, Landing Page, Blog"
          url="https://a-elnawawy.github.io/newmama/index.html"
          codeUrl="https://github.com/A-ElNawawy/newmama"
        />
        <Card
          img={Imgs.ropoFriends}
          alt="Ropo Friends"
          header="A Blog Targeting The New Mothers"
          description="A Blog With Newsletter Form Powered By Mailchimp, It Will Be Used As a Landing Page"
          mainTech= "Built on Ready Theme using Bootstrap"
          For="New Mama Team"
          Keywords= "Responsive, Landing Page, Blog"
          url="https://a-elnawawy.github.io/newmama/index.html"
          codeUrl="https://github.com/A-ElNawawy/newmama"
        />
        <Card
          img={Imgs.superMarket}
          alt="Super Market"
          header=""
          description=""
          actionButton=""
        />
      </Container>
    </div>
  );
}

export default App;