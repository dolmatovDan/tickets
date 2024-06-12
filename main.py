from kivy.app import App
from kivy.uix.label import Label
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button
from kivy.uix.boxlayout import BoxLayout


class SimpleApp(App):
    def build(self):
        self.layout = BoxLayout(orientation="vertical")

        self.name_input = TextInput(hint_text="Введите ваше имя", multiline=False)
        self.layout.add_widget(self.name_input)

        self.greet_button = Button(text="Привет!", on_press=self.greet)
        self.layout.add_widget(self.greet_button)

        self.output_label = Label(text="")
        self.layout.add_widget(self.output_label)

        return self.layout

    def greet(self, instance):
        name = self.name_input.text
        self.output_label.text = "Привет, {}".format(name)


if __name__ == "__main__":
    SimpleApp().run()
