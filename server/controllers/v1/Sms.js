import SmsModel from '../../model/Sms';

class SmsController {
  static async addSms(req, res) {
    try {
      const {
        message,
        sender,
        receiver,
        status,
      } = req.body;

      // We first check if all fields are provided
      if (!message || !sender || !receiver || !status) {
        return res.status(400).send({
          message: 'All fields are required',
        });
      }
      const sms = new SmsModel(req.body);

      await sms.save((err) => {
        if (err) {
          return res.status(422).send({
            message: 'Your SMS was not sent, please try again later ',
          });
        }
        return res.status(200).send({
          message: 'Your sms was sent successfully',
        });
      });
    } catch (error) {
      console.log('We could not process this request at this time', error);
    }
  }

  static async fetchSms(req, res) {
    SmsModel
      .find()
      .populate('sender')
      .populate('receiver')
      .exec((err, sms) => {
        if (err) {
          return res.send({
            message: 'We could not retrieve your sms at this time, please check back later',
          });
        }

        return res.status(200).send({
          message: 'sms retrieved successfully',
          sms,
        });
      });
  }

  static async fetchSmsBySender(req, res) {
    SmsModel
      .find({ sender: req.params.id })
      .populate('sender')
      .exec((err, sms) => {
        if (err) {
          return res.send({
            message: 'We could not retrieve your sms at this time, please check back later',
          });
        }

        return res.status(200).send({
          message: `Sms for ${req.params.id} retrieved successfully`,
          sms,
        });
      });
  }

  static async fetchSmsByReceiver(req, res) {
    SmsModel
      .find({ receiver: req.params.id })
      .populate('receiver')
      .exec((err, sms) => {
        if (err) {
          return res.send({
            message: 'We could not retrieve your sms at this time, please check back later',
          });
        }

        return res.status(200).send({
          message: `Sms for ${req.params.id} retrieved successfully`,
          sms,
        });
      });
  }
}

export default SmsController;
