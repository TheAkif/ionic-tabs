# ionic-tabs
## Ionic tabs nested routing without ionic generate page-tabs

People get usually confused about the tabs and nested routing in IONIC4.

Here is a demo project in which Tabs implemented using ion-tabs and when you click on tabs the respective component gets called.


No need to do nested routing. Below are the steps shown how to add those:

1. Create a bank project using below command in your respective directory.

    ```
     ionic start test-project blank
    ```
2. Generate a component using ``` ng g c <component-name> ``` (For example name of the component is tabs)

3. Copy and paste the ``` ion-tabs ``` code from https://ionicframework.com/docs/api/tabs

4. Generate as many components as you want in tabs using the above commands.

5. Here ```  <ion-tab-button tab="contacts"> ``` **contacts** is refering to a component itself so no need for routerLink.

6. Lastly go to ``` routing-module.ts ``` and under tabs routing create childrens of all the components you want in tabs.
