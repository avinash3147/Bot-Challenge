(function(){
    angular.module('HelperBot')
    .controller('BotController', ['$scope', '$http', "$state",'$location', function($scope, $http, $state,$location){

      $scope.$on('$stateChangeSuccess', function(event,
  			toState, toParams, fromState, fromParams) {

          $scope.user = localStorage.getItem('User-Data');


          var config = {
              botName: 'Helper Bot',
              inputs: '#humanInput',
              engines: [ChatBot.Engines.helper()],
              inputCapabilityListing: true,
              addChatEntryCallback: function(entryDiv, text, origin) {
                  entryDiv.delay(200).slideDown();
              }
          };

          ChatBot.init(config);

          ChatBot.setBotName("Helper");

          ChatBot.addPattern("^hi$", "response", "Howdy, friend", undefined, "Say 'Hi' to be greeted back.");

          ChatBot.addPattern("^bye$", "response", "See you later buddy", undefined, "Say 'Bye' to end the conversation.");

          ChatBot.addPattern("(?:my name is|I'm|I am) (.*)", "response", "hi $1, thanks for talking to me today", function (matches) {
              ChatBot.setHumanName(matches[1]);
          },"Say 'My name is [your name]' or 'I am [name]' to be called that by the bot");


          if($state.current.name == 'cancellation-fee'){

            if (localStorage['User-Data']){
                $location.path("/chat-bot/fee");
            } else {
                $location.path("/");
            }

            ChatBot.addPattern("(what is the )?support number", "response", "8998677645", undefined, "Say 'What is the support number' to get the answer.");

            $scope.title = 'Cancellation Fee Charged';

  				}

          if($state.current.name == 'incorrect-billing'){

            if (localStorage['User-Data']){
                $location.path("/chat-bot/bill");
            } else {
                $location.path("/");
            }

            ChatBot.addPattern("(what is the )?billing number", "response", "8998677645", undefined, "Say 'What is the billing number' to get the answer.");

            ChatBot.addPattern("(why is it )?getting delayed", "response", "we are sorry for that", undefined, "Say 'why is it getting delayed.' to get the answer");


            $scope.title = 'Billing Queries';

  				}

          if($state.current.name == 'need-invoices'){

            if (localStorage['User-Data']){
                $location.path("/chat-bot/invoice");
            } else {
                $location.path("/");
            }

            ChatBot.addPattern("(what is the )?invoice number", "response", "8998677645", undefined, "Say 'What is the invoice number' to get the answer.");


            $scope.title = 'Need Invoices';

  				}

          if($state.current.name == 'refund-queries'){

            if (localStorage['User-Data']){
                $location.path("/chat-bot/refund");
            } else {
                $location.path("/");
            }

            ChatBot.addPattern("(what is the )?refund date", "response", "8998677645", undefined, "Say 'What is the refund date' to get the answer.");


            $scope.title = 'Refund Queries';

  				}

          if($state.current.name == 'product-damage'){

            if (localStorage['User-Data']){
                $location.path("/chat-bot/product");
            } else {
                $location.path("/");
            }

            ChatBot.addPattern("(what is the )?product problem", "response", "8998677645", undefined, "Say 'What is the product problem' to get the answer.");


            $scope.title = 'Product Damage';

  				}

          if($state.current.name == 'delivery-status'){

            if (localStorage['User-Data']){
                $location.path("/chat-bot/status");
            } else {
                $location.path("/");
            }

            ChatBot.addPattern("(what is the )?delivery status", "response", "8998677645", undefined, "Say 'What is the delivery status' to get the answer.");


            $scope.title = 'Delivery Status';

  				}

          if($state.current.name == 'time-queries'){

            if (localStorage['User-Data']){
                $location.path("/chat-bot/time");
            } else {
                $location.path("/");
            }

            ChatBot.addPattern("(what is the )?agent timing", "response", "8998677645", undefined, "Say 'What is the agent timing' to get the answer.");


            $scope.title = 'Agent Timing';

  				}

          if($state.current.name == 'behaviour-issues'){

            if (localStorage['User-Data']){
                $location.path("/chat-bot/behaviour");
            } else {
                $location.path("/");
            }

            ChatBot.addPattern("(what is the )?behaviour issue", "response", "8998677645", undefined, "Say 'What is the behaviour issue' to get the answer.");


            $scope.title = 'Agent Behaviour';

  				}


  	});
        $scope.logOut = function () {
            localStorage.clear();
            $location.path("/");
        }
    }]);
}());
