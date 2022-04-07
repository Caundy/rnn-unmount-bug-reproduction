import { Navigation } from "react-native-navigation";
import App from "./App";
import { Detail } from "./Detail";

Navigation.registerComponent('rnnIssueRepro', () => App);
Navigation.registerComponent('com.myApp.DetailScreen', () => Detail);

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'rnnIssueRepro'
             }
           }
         ]
       }
     }
  });
});