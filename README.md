# About

Building a native mobile application which I could use with my handheld dynamometer to measure isometric force output for rehabilitation and athlete monitoring purposes.

Handheld dynamometer is built with microcontroller, AD-amplifier and suitable load cell.

Currently prototyping and developing a box to insert all the needed parts to use this as handheld dynamometer which use Bluetooth for communication.

## Preview

Current preview of project. Within preview, millivoltage is measured for testing purposes until calibration can be done with load cell firmly attached and calibrated with known weights.

Using [Recharts](https://recharts.org/en-US) to output visually graph over time/millivoltage after measurement.

[App preview in current development stage](https://ik.imagekit.io/htg3gsxgz/hh_dynamometer/hh_dynamometer_divogxsum.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1672671738161)

![App preview](https://ik.imagekit.io/htg3gsxgz/hh_dynamometer/hh_dynamometer_divogxsum.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1672671738161)

### Todo

- [] Add profile creation
- [] Save profile related measurement data
  - Date, Movement selected, graph related force / ms data
  - To save locally to device or within cloud?
    - Prototyping with local storage first
  - Should created profiles contain any sensitive information
    - name / email?
- [] State management of app
  - UseContext hook enough?
  - Other state management options if UseContext not enough
    - Zustand over Redux as app will be simple
- [] Troubleshoot Bluetooth errors encountered with older Android phone/tablet
  - Connect/Disconnect loop when using eg. Android 8.1 (Google Pixel C)
  - Possibly cordova-plugin BLE related issue
- [] Enhance UX/UI
