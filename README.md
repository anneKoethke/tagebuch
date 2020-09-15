# TagebuchApp with ReactNative + Expo

A simple diary app (prototype) with react native and expo CLI to track your mood. it's filled with dummy data and will become a pure React Native (without Expo) some time soon..

It was an enhancement of a very useful tutorial by TheNetNinja: [tutorial series](https://www.youtube.com/watch?v=ur6I5m2nTvk&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=1).


## getting started
`npm i
expo start`


## How it looks

*resizing images in MarkDown inside a Table here is such a pain...* :')


### HomeScreen and how to add a new entry (Modal in HomeScreen)

| HomeScreen: | Modal is empty | Modal: required inputs | Modal filled in | updated Flatlist in HomeScreen |
|:------------|:---------------|:-----------------------|:----------------|:-------------------------------|
| ![alt text](https://github.com/anneKoethke/tagebuch/blob/master/assets/examplePics/01-HomeScreen.png "HomeScreen with Flatlist"){height="50%" width="50%"} | ![alt text](https://github.com/anneKoethke/tagebuch/blob/master/assets/examplePics/02-ModalEntryFrom_empty.png "Modal = EntryForm"){height="50%" width="50%"} |![alt text](https://github.com/anneKoethke/tagebuch/blob/master/assets/examplePics/03-ModalEntryForm_required.png "required"){height="50%" width="50%"} | ![alt text](https://github.com/anneKoethke/tagebuch/blob/master/assets/examplePics/04-ModalEntryForm_with_data.png "dummy data inserted" ){height="50%" width="50%"} | ![alt text](https://github.com/anneKoethke/tagebuch/blob/master/assets/examplePics/05-updated_HomeScreen.png){height="50%" width="50%"} | ![alt text](){height="50%" width="50%"} |

The HomeScreen currently shows all the existing entries. This will change to showing only the most recent entries, e.g. of the current week or month, in the future.. (though, showing everything with dynamic reloading is what Flatlist is about, but my UI feeling said no to this solution)

Clicking on the edit 'button' (MaterialCommunityIcon) opens up a Modal to fill in for a new entry. It can be closed by the 'X'. All inputs a required and controlled by Formik (input definition and control) and Yup (ruleSchema). The HomeScreen will be updated accordingly. There is no data saving, yet, so reloading the App will make it forget the added entries.


### Drawer Navigation and the other screens

| Drawer Navigation | AboutScreen | CalendarView (current month) | Calender (last month)  | Info on CalendarView (Modal) | HomeScreen: EntryDetails |
|:------------------|:------------|:-----------------------------|:-----------------------|:-----------------------------|:-------------------------|
| ![alt text](https://github.com/anneKoethke/tagebuch/blob/master/assets/examplePics/06-DrawerNavigation.png "DrawerNavigation"){height="50%" width="50%"} | ![alt text](https://github.com/anneKoethke/tagebuch/blob/master/assets/examplePics/07-AboutScreen.png "AboutScreen"){height="50%" width="50%"} |![alt text](https://github.com/anneKoethke/tagebuch/blob/master/assets/examplePics/08-CalendarView.png "CalendarView - current month"){height="50%" width="50%"} | ![alt text](https://github.com/anneKoethke/tagebuch/blob/master/assets/examplePics/09-CalendarView_last_month.png "last month"){height="50%" width="50%"} | ![alt text](https://github.com/anneKoethke/tagebuch/blob/master/assets/examplePics/10-ModalCalendarInfo.png "Info on CalendarView (Modal)"){height="50%" width="50%"} | ![alt text](https://github.com/anneKoethke/tagebuch/blob/master/assets/examplePics/09-CalendarView_last_month.png "last month"){height="50%" width="50%"} | ![alt text](https://github.com/anneKoethke/tagebuch/blob/master/assets/examplePics/11-EntryDetails.png "EntryDetails"){height="50%" width="50%"} |

The Routing via AppNavigator has a DrawerNavigation (HomeStack, AboutStack, CalendarStack) with a nested StackNavigation (HomeScreen, EntryDetails).

The CalendarView has an informational Modal and shows (as dummy data) the dates with entries (green circle around the date) and the moods (differently colored dots under the specific date). Currently there is no connection between data in HomeScreen and Data in CalnedarView. Just checking things out here...


## History

This is actually a remodelling of the **ThinkNegative App**, a team project at university to learn programming in Android Studio (Java). ;)

*...don't we all have a toDo-App in every language learned...*
