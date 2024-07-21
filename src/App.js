import React from 'react';
import './App.css';
import cfLogo from './cf.png'; // Adjust the path if necessary
import igemLogo from './igem.png'; // Adjust the path if necessary
import t11 from './t11.png'; // Adjust the path if necessary
import t12 from './t12.png'; // Adjust the path if necessary
import t21 from './t21.png'; // Adjust the path if necessary
import t22 from './t22.png'; // Adjust the path if necessary
import t23 from './t23.png'; // Adjust the path if necessary
import t24 from './t24.png'; // Adjust the path if necessary
import t31 from './t31.png'; // Adjust the path if necessary
import t32 from './t32.png'; // Adjust the path if necessary


const App = () => {
  return (
    <div className="container">
      <nav className="sidebar">
        <ul>
          <li><a href="#background-section">BACKGROUND</a></li>
          <li><a href="#cfastdx-section">CFASTDX</a></li>
          <li><a href="#inspiration-section">INSPIRATION</a></li>
          <li><a href="#application-section">APPLICATION</a></li>
          <li><a href="#references-section">REFERENCES</a></li>
        </ul>
      </nav>
      <main className="content">
        <h1>PROJECT DESCRIPTION</h1>
        <section id="background-section" className="background">
          <h2>Background</h2>
          <div className="scrollable-content">
            <p>
              <a href="#">Cystic Fibrosis (CF)</a> is a genetic disorder that primarily affects the lungs and digestive system. It is caused by mutations in the CFTR gene, which encodes a protein responsible for regulating the movement of salt and water in and out of cells. This leads to the production of thick, sticky mucus that can clog airways and trap bacteria, resulting in recurrent lung infections and respiratory issues.
            </p>
            <p>
            Misdiagnosis is a significant challenge in managing cystic fibrosis(CF) as it resembles the symptoms of Bronchiectasis,Celiac disease, sinusitis. This often leads to delayed treatment and worsens patient outcomes. Due to lack of awareness, especially in regions like India, CF is frequently mistaken for other respiratory or digestive conditions. This misdiagnosis can prevent patients from receiving the timely and appropriate care they need, exacerbating health complications and impacting their quality of life.

            </p>
            <p>
            Estimates suggest the incidence of CF in India ranges from 1 in 10,000 to 1 in 40,000 live births, with misdiagnosis rates being significant and due to lack of awareness, the actual burden may be higher.
            </p>
            <p>
            In the global context, CF is common among individuals of North European descent. In the United states the incidence rate ranges from 1 in 2500 to 1 in 3000 newborns and approximately 30000 individuals in the US are living with CF.
            </p>
            {/* Add more paragraphs here to test scrolling */}
            <p>
            Even though the prevalence rate is higher in the Western countries compared to the Asian subcontinent, research suggests that there might be discrepancies in the number of cases and it might be higher than the actual number.
            </p>
            <p>
            The most popular existing method for CF is the sweat chloride test, which follows an invasive methodology of triggering sweat  and requires trained medical professionals. It takes days to produce results and logistics inhibit the widespread awareness of CF as specialised hospitals in rural areas are limited.
            </p>
            <div className="footer">
            <img src={t11} alt="t11 Logo" />
            <hr size="2" width="90%" color="white"></hr>

            <img src={t12} alt="t12 Logo" />
            </div>
          </div>
        </section>
        <section id="cfastdx-section" className="background">
          <h2>CFASTDX</h2>
          <div className="scrollable-content">
            <p>
            To tackle this problem we strive to make screening more convenient and accessible for people by developing a rapid,sensitive,easy to use, accurate, point of care diagnostic kit for the detection of cystic fibrosis (CF). The detection mechanism utilises the principles of Crispr Cas12a technology for the detection of mutated CFTR gene( Cystic Fibrosis Transmembrane Regulator ) where the mutation leads to formation of thick mucus which clogs the airway and cause irregular transport of chloride ion in and out of the lungs rooting for the formation of thick mucus in the lungs. We have decided to develop an in-kit DNA extraction to eliminate the use of laboratory equipment. Our method of diagnosis involves administration of buccal swab, guided by crRNA complementary to the sequence of the most prevalent CFTR mutation (F508del) which accounts for 70% of the total cases, where deletion occurs in the 1521-1524th base position that codes for phenylalanine.This mechanism allows the activation of trans-cleavage property of CRISPR cas12a which results in cleavage of reporter molecule in the solution and visual display on a lateral flow assay strip.
            </p>
            <div className="footer">
            <img src={t21} alt="t11 Logo" />
            <hr size="2" width="90%" color="white"></hr>
            <img src={t22} alt="t12 Logo" />
            </div>
            <div className="footer">
            <img src={t23} alt="t11 Logo" />
            <hr size="2" width="90%" color="white"></hr>

            <img src={t24} alt="t12 Logo" />
            </div>
          </div>
        </section>
        <section id="inspiration-section" className="background">
          <h2>Inspiration</h2>
          <div className="scrollable-content">
            <p>
            CFastdx is driven by a profound commitment to revolutionizing the diagnosis and management of cystic fibrosis(CF) particularly in regions with limited diagnostic resources. Misdiagnosis of cystic fibrosis is a significant issue, especially in countries like India, where awareness and diagnostic capabilities are limited
            </p>
            <p>
            We aim to provide a reliable and rapid diagnostic tool to reduce these misdiagnoses and ensure timely and accurate identification of CF, as early detection of CF is crucial for effective management and improved quality of life for patients. 
            </p>
            <p>
            The development of CFastdx is motivated by the goal of promoting a more sustainable healthcare system, by reducing the need for multiple,lengthy diagnostic procedures and minimizing resource consumption.
            </p>
            <p>
            CFastdx contributes to a more efficient and environmentally friendly health care practice and is inspired by advancements in medical technology and the potential to leverage these innovations for better healthcare solutions with the utilization of cutting-edge diagnostic technologies to provide a reliable, user friendly, and accessible diagnostic tool for healthcare providers ultimately leading to better patient care and outcomes worldwide.
            </p>
            <div className="footer">
            <img src={t31} alt="t11 Logo" />
            <hr size="2" width="90%" color="white"></hr>
            <img src={t32} alt="t12 Logo" />
            </div>
            
          </div>
        </section>
        <section id="application-section" className="background">
          <h2>Application</h2>
          <div className="scrollable-content">
          <h3>Home-Based Diagnostics:</h3>
            <p>
             CFastdx allows for accurate and reliable cystic fibrosis (CF) diagnosis from the comfort of a patient’s home. This is especially beneficial for individuals who have difficulty accessing traditional healthcare facilities due to geographical, mobility, or economic constraints. Home-based diagnostics ensure that more patients can be screened and diagnosed without the need for frequent hospital visits.
            </p>
            <h3>Community Screening Programs:</h3>
            <p>
            Community health initiatives can utilize CFastdx to conduct large-scale screening programs. By deploying portable diagnostic kits to local clinics and community health centers, widespread screening can be conducted efficiently, identifying at-risk individuals early and ensuring they receive the necessary medical attention.
            </p>
            <h3>Family Screening:</h3>
            <p>
            CFastdx can be used for family screening, especially in households where a family member is known to have CF. By testing siblings and other relatives, potential carriers or affected individuals can be identified early, allowing for prompt medical care and genetic counseling
            </p>
            <h3>Preconception & Prenatal Screening:</h3>
            <p>
            CFastdx can be used in preconception and prenatal screening programs to identify carriers of CF gene mutations. Prospective parents can receive genetic counseling based on the screening results, helping them make informed decisions about family planning.
            </p>
            
          </div>
        </section>
        <section id="references-section" className="background">
          <h2>References</h2>
          <div className="scrollable-content">
            <p>
Cystic Fibrosis: Shteinberg, M., Haq, I. J., Polineni, D., & Davies, J. C. (2021). Cystic fibrosis. Lancet, 397(10290), 2195–2211. https://doi.org/10.1016/s0140-6736(20)32542-3
<br></br>
<br></br>

Cystic Fibrosis early detection and prevention: Coverstone, A. M., & Ferkol, T. W. (2021). Early Diagnosis and Intervention in Cystic Fibrosis: Imagining the Unimaginable. Frontiers in Pediatrics, 8. https://doi.org/10.3389/fped.2020.608821
<br></br>
<br></br>

Cystic Fibrosis rapid response approach: Güemes, A. G. C., Lim, Y. W., Quinn, R. A., Conrad, D. J., Benler, S., Maughan, H., Edwards, R., Brettin, T., Cantú, V. A., Cuevas, D., Hamidi, R., Dorrestein, P., & Rohwer, F. (2019). Cystic Fibrosis Rapid Response: Translating Multi-omics Data into Clinically Relevant Information. MBio, 10(2). https://doi.org/10.1128/mbio.00431-19
<br></br>
<br></br>

Genomic sites and editing in  mutated CFTR gene with CRISPR CAS gene and PAM sites: Wang, G. (2023). Genome Editing for Cystic Fibrosis. Cells, 12(12), 1555. https://doi.org/10.3390/cells12121555
<br></br>
<br></br>

Use of Buccal Swabs in the test, proof of presence of buccal cells having target gene: Richards, B., Skoletsky, J., Shuber, A. P., Balfour, R., Stern, R. C., Dorkin, H. L., Parad, R. B., Witt, D., & Klinger, K. W. (1993). Multiplex PCR amplification from the CFTR gene using DNA prepared from buccal brushes/swabs. Human Molecular Genetics Online/Human Molecular Genetics, 2(2), 159–163. https://doi.org/10.1093/hmg/2.2.159
<br></br>
<br></br>

Use of quenchers: Why are quenchers used in real time PCR? | AAT Bioquest
<br></br>
<br></br>

Use of Novel Fluorophore for Real-Time Biomonitoring System:Song, H. O., Lee, B., Bhusal, R. P., Park, B., Yu, K., Chong, C. K., Cho, P. Y., Kim, S. Y., Kim, H. S., & Park, H. (2012). Development of a Novel Fluorophore for Real-Time Biomonitoring System. PloS One, 7(11), e48459. https://doi.org/10.1371/journal.pone.0048459
<br></br>
<br></br>

Use of TE Buffer:Kiran, U., Gokulan, C. G., Kuncha, S. K., Vedagiri, D., Chander, B. T., Sekhar, A. V., Dontamala, S., Reddy, A. L., Tallapaka, K. B., Mishra, R. K., & Harshan, K. H. (2020). Easing diagnosis and pushing the detection limits of SARS-CoV-2. Biology Methods & Protocols, 5(1). https://doi.org/10.1093/biomethods/bpaa017
<br></br>
<br></br>

Buccal DNA Extraction:Buccal DNA Extraction & WGA Amplification Protocol
<br></br>
<br></br>

Diagnosis of Cystic Fibrosis:Medhi, P., Isaac, B. T. J., Gupta, R., Thangakunam, B., Chandy, S. T., & Varkki, S. D. (2024). Diagnosis of Cystic Fibrosis Beyond Childhood in India. Current Medical Issues/Current Medical Issues, 22(2), 102–105. https://doi.org/10.4103/cmi.cmi_150_23
            </p>
          </div>
        </section>
        <footer className="footer">
          <div className="footer-content">
            <div className="follow-us">
              <img src={cfLogo} alt="CFASTDX Logo" />
              <img src={igemLogo} alt="IGEM Logo" />
              <h2>Follow Us</h2>
              <p>Instagram: igem_svce_chennai</p>
              <p>LinkedIn: BIOTECHNOLOGY SVCE</p>
            </div>
            <div className="contact-us">
              <h2>Contact Us</h2>
              <p>Email: igemsvcechennai@gmail.com</p>
              <p>Email: bioacademy@svce.ac.in</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
