interface Window {
  Telegram: {
    WebApp: {
      initData: string; //A string with raw data transferred to the Web App, convenient for validating data.
      initDataUnsafe: WebAppInitData; //An object with input data transferred to the Web App.
      version: string; //The version of the Bot API available in the user's Telegram app.
      colorScheme: string; //The color scheme currently used in the Telegram app. Either “light” or “dark”. Also available as the CSS variable var(--tg-color-scheme).

      themeParams: ThemeParams; //An object containing the current theme settings used in the Telegram app.
      isExpanded: boolean; //True if the Web App is expanded to the maximum available height. False, if the Web App occupies part of the screen and can be expanded to the full height using the expand() method.
      viewportHeight: number; //The current height of the visible area of the Web App. Also available in CSS as the variable var(--tg-viewport-height).

      viewportStableHeight: number; //The height of the visible area of the Web App in its last stable state. Also available in CSS as a variable var(--tg-viewport-stable-height).

      headerColor: string; //Current header color in the #RRGGBB format.
      backgroundColor: string; //Current background color in the #RRGGBB format.
      BackButton: BackButton; //An object for controlling the back button which can be displayed in the header of the Web App in the Telegram interface.
      MainButton: MainButton; //An object for controlling the main button, which is displayed at the bottom of the Web App in the Telegram interface.
      HapticFeedback: HapticFeedback; //An object for controlling haptic feedback.
      isVersionAtLeast(version): void; //Returns true if the user's app supports a version of the Bot API that is equal to or higher than the version passed as the parameter.
      setHeaderColor(color): void; //Bot API 6.1+ A method that sets the app header color. You can only pass Telegram.WebApp.themeParams.bg_color or Telegram.WebApp.themeParams.secondary_bg_color as a color or you can use keywords bg_color, secondary_bg_color instead.
      setBackgroundColor(color): void; //Bot API 6.1+ A method that sets the app background color in the #RRGGBB format or you can use keywords bg_color, secondary_bg_color instead.
      onEvent(eventType, eventHandler): void; //	A method that sets the app event handler. Check the list of available events.
      offEvent(eventType, eventHandler): void; //	A method that deletes a previously set event handler.
      sendData(data): void; //A method used to send data to the bot. When this method is called, a service message is sent to the bot containing the data data of the length up to 4096 bytes, and the Web App is closed. See the field web_app_data in the class Message.

      openLink(url): void; //A method that opens a link in an external browser. The Web App will not be closed.

      openTelegramLink(url): void; //A method that opens a telegram link inside Telegram app. The Web App will be closed.
      openInvoice(url, callback?): void; //	Bot API 6.1+ A method that opens an invoice using the link url. The Web App will receive the event invoiceClosed when the invoice is closed. If an optional callback parameter was passed, the callback function will be called and the invoice status will be passed as the first argument.
      ready(): void; //A method that informs the Telegram app that the Web App is ready to be displayed.
      expand(): void; //A method that expands the Web App to the maximum available height. To find out if the Web App is expanded to the maximum height, refer to the value of the Telegram.WebApp.isExpanded parameter
      close(): void; //A method that closes the Web App.
    };
  };
}

interface WebAppInitData {
  query_id: string; //	Optional. A unique identifier for the Web App session, required for sending messages via the answerWebAppQuery method.
  user: WebAppUser; //	Optional. An object containing data about the current user.
  receiver: WebAppUser; //	Optional. An object containing data about the chat partner of the current user in the chat where the bot was launched via the attachment menu. Returned only for private chats and only for Web Apps launched via the attachment menu.
  chat: WebAppChat; //	Optional. An object containing data about the chat where the bot was launched via the attachment menu. Returned for supergroups, channels and group chats – only for Web Apps launched via the attachment menu.
  start_param: string; //	Optional. The value of the startattach parameter, passed via link. Only returned for Web Apps when launched from the attachment menu via link.
  can_send_after: number; //	Optional. Time in seconds, after which a message can be sent via the answerWebAppQuery method.
  auth_date: number; //	Unix time when the form was opened.
  hash: string; //	A hash of all passed parameters, which the bot server can use to check their validity.
}

interface WebAppUser {
  id: number; //	A unique identifier for the user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. It has at most 52 significant bits, so a 64-bit number or a double-precision number type is safe for storing this identifier.
  is_bot: boolean; //	Optional. True, if this user is a bot. Returns in the receiver field only.
  first_name: string; //	First name of the user or bot.
  last_name: string; //	Optional. Last name of the user or bot.
  username: string; //	Optional. Username of the user or bot.
  language_code: string; //	Optional. IETF language tag of the user's language. Returns in user field only.
  photo_url: string; //	Optional. URL of the user’s profile photo. The photo can be in .jpeg or .svg formats. Only returned for Web Apps launched from the attachment menu.
}

interface WebAppChat {
  id: number; //	Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit number or double-precision number type are safe for storing this identifier.
  type: string; //	Type of chat, can be either “group”, “supergroup” or “channel”
  title: string; //	Title of the chat
  username: string; //	Optional. Username of the chat
  photo_url: string; //	Optional. URL of the chat’s photo. The photo can be in .jpeg or .svg formats. Only returned for Web Apps launched from the attachment menu.
}

interface ThemeParams {
  bg_color: string; //	Optional. Background color in the #RRGGBB format.
  text_color: string; //	Optional. Main text color in the #RRGGBB format.
  hint_color: string; //	Optional. Hint text color in the #RRGGBB format.
  link_color: string; //	Optional. Link color in the #RRGGBB format.
  button_color: string; //	Optional. Button color in the #RRGGBB format.
  button_text_color: string; //	Optional. Button text color in the #RRGGBB format.
  secondary_bg_color: string; //	Optional. Bot API 6.1+ Secondary background color in the #RRGGBB format.
}

interface BackButton {
  isVisible: boolean; //	Shows whether the button is visible. Set to false by default.
  onClick(callback): void; //	Bot API 6.1+ A method that sets the button press event handler. An alias for Telegram.WebApp.onEvent('backButtonClicked', callback)
  offClick(callback): void; //	Bot API 6.1+ A method that removes the button press event handler. An alias for Telegram.WebApp.offEvent('backButtonClicked', callback)
  show(): void; //	Bot API 6.1+ A method to make the button active and visible.
  hide(): void; //	Bot API 6.1+ A method to hide the button.
}

interface MainButton {
  text: string; //	Current button text. Set to CONTINUE by default.
  color: string; //	Current button color. Set to themeParams.button_color by default.
  textColor: string; //	Current button text color. Set to themeParams.button_text_color by default.
  isVisible: boolean; //	Shows whether the button is visible. Set to false by default.
  isActive: boolean; //	Shows whether the button is active. Set to true by default.
  isProgressVisible: boolean; //	Readonly. Shows whether the button is displaying a loading indicator.
  setText(text): void; //	A method to set the button text.
  onClick(callback): void; //	A method that sets the button press event handler. An alias for Telegram.WebApp.onEvent('mainButtonClicked', callback)
  offClick(callback): void; //	A method that removes the button press event handler. An alias for Telegram.WebApp.offEvent('mainButtonClicked', callback)
  show(): void; //	A method to make the button visible.
  hide(): void; //	A method to hide the button.
  enable(): void; //	A method to enable the button.
  disable(): void; //	A method to disable the button.
  showProgress(leaveActive): void; //	A method to show a loading indicator on the button.
  hideProgress(): void; //	A method to hide the loading indicator.
  setParams(params: Partial<MainButtonSetParams>): void; //	A method to set the button parameters. The params parameter is an object containing one or several fields that need to be changed:
}

interface MainButtonSetParams {
    text: string;
    color: string;
    text_color: string;
    is_active: string;
    is_visible: boolean;
}

interface HapticFeedback {
  impactOccurred(style): void; //	Bot API 6.1+ A method tells that an impact occurred. The Telegram app may play the appropriate haptics based on style value passed. Style can be one of these values:
  notificationOccurred(type): void; //	Bot API 6.1+ A method tells that a task or action has succeeded, failed, or produced a warning. The Telegram app may play the appropriate haptics based on type value passed. Type can be one of these values:
  selectionChanged(): void; //	Bot API 6.1+ A method tells that the user has changed a selection. The Telegram app may play the appropriate haptics.
}
