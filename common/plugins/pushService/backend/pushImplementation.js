'use strict';
/*
  Script generated by Robins Gupta
*/
/*
  Sending the push notifation from the Application
*/

//This method returns the push service sendMessage send  method..
module.exports = function(ApplicationModel, NotificationModel, PushModel) {

    var badge = 1;
    var sendMessage = function(app, message, registrationId, from, callback) {
        var Application = ApplicationModel;
        var Push = PushModel;
        var Notification = NotificationModel;

        var note = new Notification({
            expirationInterval: 3600, // Expires 1 hour from now.
            badge: badge++,
            //  sound: 'ping.aiff',
            message: message,
            messageFrom: from
        });


        PushModel.notifyById(registrationId, note, function(err) {
            if (err) {
                console.error('Cannot notify %j: %s', registrationId, err.stack);
                return callback(err);

            }
            console.log('Pushing notification to %j', registrationId);
            callback(null, []);
        });
    }; //sendMessage function

    //Returns SendMessage function to send Push message..
    return sendMessage;

};