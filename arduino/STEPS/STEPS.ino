//NEW FOR STEPS!!!//
//TwoWire I2Ctwo = TwoWire(1);
#define stepThreshold 90 
const int MPU = 0x68;  
int AcX,AcY,AcZ,Tmp,GyX,GyY,GyZ; 
int steps = 0; // Number of steps
int AcX0 = 0;
int AcY0 = 0;

int ax0 = 0;
int ay0 = 0;

boolean googleIt = false;
boolean stepDown = false;

//TwoWire I2Ctwo = TwoWire(1);

//END!!!//

#include "I2Cdev.h"
#include "MPU6050.h"


#if I2CDEV_IMPLEMENTATION == I2CDEV_ARDUINO_WIRE
//    #include "Wire.h"
    #include <Wire.h>
#endif


MPU6050 accelgyro;


int16_t ax, ay, az;
int16_t gx, gy, gz;


#define OUTPUT_READABLE_ACCELGYRO

//#define OUTPUT_BINARY_ACCELGYRO


#define LED_PIN 13
bool blinkState = false;

void setup() {


    #if I2CDEV_IMPLEMENTATION == I2CDEV_ARDUINO_WIRE
        Wire.begin();
    #elif I2CDEV_IMPLEMENTATION == I2CDEV_BUILTIN_FASTWIRE
        Fastwire::setup(400, true);
    #endif

    Serial.begin(38400);

    // initialize device
    Serial.println("Initializing I2C devices...");
    accelgyro.initialize();
    
    Serial.println("Testing device connections...");
    Serial.println(accelgyro.testConnection() ? "MPU6050 connection successful" : "MPU6050 connection failed");
    
    pinMode(LED_PIN, OUTPUT);
}

void loop() {
   
    accelgyro.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);

    

    #ifdef OUTPUT_READABLE_ACCELGYRO
        
        Serial.print("a/g:\t");
        Serial.print("\tax:");
        Serial.print(ax); 
        Serial.print("\tay:");
        Serial.print(ay); 
        
//        Serial.print(az); Serial.print("\t");
//        Serial.print(gx); Serial.print("\t");
//        Serial.print(gy); Serial.print("\t");
//        Serial.println(gz);

        delay(500);
    #endif

    #ifdef OUTPUT_BINARY_ACCELGYRO
        Serial.write((uint8_t)(ax >> 8)); Serial.write((uint8_t)(ax & 0xFF));
        Serial.write((uint8_t)(ay >> 8)); Serial.write((uint8_t)(ay & 0xFF));
        Serial.write((uint8_t)(az >> 8)); Serial.write((uint8_t)(az & 0xFF));
        Serial.write((uint8_t)(gx >> 8)); Serial.write((uint8_t)(gx & 0xFF));
        Serial.write((uint8_t)(gy >> 8)); Serial.write((uint8_t)(gy & 0xFF));
        Serial.write((uint8_t)(gz >> 8)); Serial.write((uint8_t)(gz & 0xFF));
    #endif

    readSteps();
    

}

void readSteps() {
  
  float amplitude;
  amplitude = sqrt((ax-ax0)^2 + (ay-ay0)^2);

  if (amplitude < stepThreshold) {
    stepDown = true;
  }

  if ((amplitude >= stepThreshold) && stepDown) {
    stepDown = false;
    steps++; 
  }
  Serial.print("\t");
    Serial.print("\t");
    Serial.println("Step count:" + String(steps));
 
}

