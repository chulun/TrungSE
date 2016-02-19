<!doctype html>

    

    <table class="webchat-config">
        <tbody>
    PureCloud Webchat Demo 
    

<form id="chatForm">
    <h3>Participant Information- local</h3>
        <tr>
            <th>First Name:</th>
            <td><input type="text" id="firstName" value="Joe" /></td>
        </tr>
        <tr>
            <th>Last Name:</th>
            <td><input type="text" id="lastName" value="Montana" /></td>
        </tr>
        <tr>
            <th>Agent Email:</th>
            <td><input type="text" id="agentEmail" value="trung.le@danielllc.ininsca.com" /></td>
        </tr>
        </tbody>
    </table>

    <button type="button" onclick="startEmbeddedChat()">Start Embedded Chat</button>
    <button type="button" onclick="startPopupChat()">Start Pop-up Chat</button>
</form>

<div id="chatContainer" style="height:600px"></div>

<script src="https://apps.mypurecloud.com/webchat/jsapi-v1.js" type="text/javascript"></script>

<script type="text/javascript">

    var chatConfig = {};
    function createChatConfig(){
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var agentEmail = document.getElementById('agentEmail').value;

        chatConfig = {
            // Web chat application URL
            "webchatAppUrl": "https://apps.ininsca.com/webchat",

            // Web chat service URL
            "webchatServiceUrl": "https://realtime.ininsca.com:443",

            // Numeric organization ID
            "orgId":3223,  
           //Organization name
            "orgName": "danielllc",

            // Requested agent language skill (Agent must have this language skill to receive chat)
            "language": "English - Written",

            // Requested agent skills (Agent must have these skills to receive chat)
            "skills": ["java", "marketing"],
            // OR
            //"skills": [],

            // Priority
            "priority": 5,

            // Queue Name
            "queueName" : "General Q",
            
            // Target agent email (OPTIONAL)
            "agentEmail": agentEmail,

            // Log level
            "logLevel": "DEBUG",

            // Locale code
            "locale": "en",

            // Data that will be included with interaction
            "data": {
                "firstName": firstName,
                "lastName": lastName,
                "addressStreet": "64472 Brown Street",
                "addressCity": "Lindgrenmouth",
                "addressPostalCode": "50163-2735",
                "addressState": "FL",
                "phoneNumber": "1-916-892-2045 x293",
                "phoneType": "Cell",
                "customerId": 59606
            },

            // Logo used at the top of the chat window
            "companyLogo": {
                "width": 600,
                "height": 149,
                "url": "https://dhqbrvplips7x.cloudfront.net/webchat/1.0.23/company-logo-large-cea5ee47.png"
            },

            // Logo used within the chat window
            "companyLogoSmall": {
                "width": 149,
                "height": 149,
                "url": "https://dhqbrvplips7x.cloudfront.net/webchat/1.0.23/company-logo-small-9c9fe09b.png"
            },

            // Image used for agent
            "agentAvatar": {
                "width": 462,
                "height": 462,
                "url": "https://dhqbrvplips7x.cloudfront.net/webchat/1.0.23/agent-e202505f.png"
            },

            // Text displayed with chat window is displayed
            "welcomeMessage": "Thanks for chatting.",
             
            // CSS class applied to the chat window
            "cssClass": "webchat-frame",

            // Custom style applied to the chat window
            "css": {
                "width": "100%",
                "height": "100%"
            }
        };
    }

    function startEmbeddedChat() {
        createChatConfig();
        ININ.webchat.create(chatConfig, function(err, webchat) {
            if (err) {
                throw err;
            }

            // Render to frame
            webchat.renderFrame({
                containerEl: 'chatContainer'
            });
        });
    }

    function startPopupChat() {
        createChatConfig();
        ININ.webchat.create(chatConfig, function(err, webchat) {
            if (err) {
                throw err;
            }
            // Render to popup
            webchat.renderPopup({
                width: 400,
                height: 400,
                title: 'Chat'
            });
        });
    }
</script>








</!doctype>