import ContactModel from '../../model/Contact';

class ContactController {
  static async getContacts(req, res) {
    ContactModel
      .find()
      .exec((err, contacts) => {
        if (err) {
          return res.send({
            message: 'We could not retrieve your contacts at this time, please check back later',
          });
        }

        return res.status(200).send({
          message: 'contacts retrieved successfully',
          contacts,
        });
      });
  }

  static async addContactToPhone(req, res) {
    try {
      const { name, number } = req.body;
      if (!name) {
        return res.status(400).send({
          message: 'Name is required',
        });
      }

      if (!number) {
        return res.status(400).send({
          message: 'Phone number is required',
        });
      }

      const contact = await new ContactModel(req.body);
      await contact.save((err) => {
        if (err) console.log('Contact could not be saved', err);

        return res.status(201).send({
          message: 'New contact added to contact list',
        });
      });
    } catch (err) {
      return res.send({ message: err.message });
    }
  }

  static async removeContactFromPhone(req, res) {
    try {
      const contact = await ContactModel.findById({ _id: req.params.id });
      if (!contact) {
        return res.status(404).send({
          message: 'Contact does not exist',
        });
      }

      contact.remove();
      return res.status(200).send({
        message: 'Contact removed successfully',
      });
    } catch (err) {
      if (err.name === 'CastError') {
        return res.status(422).send({
          message: 'the contact id invalid',
        });
      }
      return res.status(422).send({
        message: 'We could not process this request at this time',
      });
    }
  }
}

export default ContactController;
