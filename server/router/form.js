const express = require("express");
const Form = require("../models/form.js");
const transporter = require('../utils/utils')
const router = new express.Router();

router.post('/form', async (req, res) => {
    try {
        const { anrede, vorName, nachName, email, anfrage, beschreibungsText } = req.body;

        if (!anrede || !vorName || !nachName || !email || !anfrage)
            return res.send({ error: 'Bitte füllen Sie alle erforderlichen Felder aus' })
        else if (beschreibungsText && anfrage !== 'Option 2')
            return res.send({ error: 'beschreibungText darf nur mit Option 2 gültig sein' })

        const greeting = anrede === 'Frau' ? 'Sehr geehrte' : 'Sehr geehrter';
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Bestätigungsemail',
            html: `<p>${greeting} ${anrede} ${nachName},</p> <br/> <p>Wir möchten bestätigen, dass wir Ihre Daten erhalten haben.</p><br/><p>freundliche Grüße,</p><p>Ihre Team</p>`
        };

        transporter.sendMail(mailOptions, async function (error) {
            if (error) {
                return res.send({ error: error.toString() })
            } else {
                const newForm = new Form({ anrede, vorName, nachName, email, anfrage, beschreibungsText });
                try {
                    await newForm.save();
                    return res.send({ newForm })
                } catch (e) {
                    return res.send({ error: e.toString() })
                }
            }
        });
    } catch (e) {
        return res.send({ error: e.toString() })
    }
})

module.exports = router;