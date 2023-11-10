const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors'); // Importez le middleware CORS
const app = express();
const port = 3001;

app.use(express.json());
// Activez CORS pour toutes les routes
app.use(cors());
app.get('/scrape-captcha', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const customHeaders = {
        'User-Agent': 'Votre agent utilisateur personnalisé',
        'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
        // Ajoutez d'autres en-têtes personnalisés au besoin
      };
    
      await page.setExtraHTTPHeaders(customHeaders);
    // Charger la page du site cible
    await page.goto(req.query.url);

    // Récupérer l'URL du CAPTCHA depuis un élément spécifique
    const captchaElement = await page.$('#ctl00_ContentPlaceHolder1_WizardDemande_Captcha1_imgCaptcha'); // Remplacez par le sélecteur réel
    const captchaUrl = await captchaElement.evaluate((element) => element.src);
    console.log('URL du CAPTCHA dynamique :', captchaUrl);

    await browser.close();

    res.json({ captchaUrl });
  } catch (error) {
    console.error('Erreur de scraping :', error);
    res.status(500).json({ error: 'Erreur de scraping' });
  }
});

app.listen(port, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});












// scrapeCaptcha.js
/*
 
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // Définissez les en-têtes HTTP personnalisés
  const customHeaders = {
    'User-Agent': 'Votre agent utilisateur personnalisé',
    'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
    // Ajoutez d'autres en-têtes personnalisés au besoin
  };
  page.waitForNavigation();

  await page.setExtraHTTPHeaders(customHeaders);
  await page.goto('https://passeport.interieur.gov.dz/fr/Suivi_Fr/Suivi_Demande');
    const captchaElement = await page.$('#ctl00_ContentPlaceHolder1_WizardDemande_Captcha1_imgCaptcha');
  
  const captchaUrl = await captchaElement.evaluate((element) => {
    return element.src;
  });

  console.log('URL du CAPTCHA dynamique :', captchaUrl);

  await browser.close();
})();
*/