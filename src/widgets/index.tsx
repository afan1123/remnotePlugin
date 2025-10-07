import { declareIndexPlugin, type ReactRNPlugin, AppEvents, WidgetLocation,useAPIEventListener } from '@remnote/plugin-sdk';
import '../style.css';
import '../index.css'; 

async function onActivate(plugin: ReactRNPlugin) {
  // Register settings
  // await plugin.settings.registerStringSetting({
  //   id: 'name',
  //   title: 'What is your Namedddsdadadasssss?1ss11  ',
  //   defaultValue: 'Bob',
  // });

  // await plugin.settings.registerBooleanSetting({
  //   id: 'pizza',
  //   title: 'Do you like pizza?',
  //   defaultValue: true,
  // });

  // await plugin.settings.registerNumberSetting({
  //   id: 'favorite-number',
  //   title: 'What is your favorite number?',
  //   defaultValue: 42,
  // });

  // A command that inserts text into the editor if focused.
  // await plugin.app.registerCommand({
  //   id: 'editor-command',
  //   name: 'Editor Command',
  //   action: async () => {
  //     plugin.editor.insertPlainText('Hello World!');
  //   },
  // });

  // Show a toast notification to the user.
  // await plugin.app.toast("I'm a toast!");

  // Register a sidebar widget.
  // await plugin.app.registerWidget('sample_widget', WidgetLocation.RightSidebar, {
  //   dimensions: { height: 'auto', width: '100%' },
  // });
  // await plugin.app.registerWidget(
  //   'right_sidebar',
  //   WidgetLocation.RightSidebar,
  //   {
  //     dimensions: {
  //       height: 'auto',
  //       width: 350,
  //     },
  //   },
  // );
  await plugin.app.registerWidget(
  'floating_widget',
  WidgetLocation.FloatingWidget,
  {
    dimensions: { height: 'auto', width: 350 },
  },
);
useAPIEventListener(AppEvents.EditorSelectionChanged, undefined, async() => {
  console.log('dppppppp');
  
 const floatingWidgetId = await plugin.window.openFloatingWidget(
  'floating_widget',
  { top: 20, left: 40 },
);
});

}


async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
