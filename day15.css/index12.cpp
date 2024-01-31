#include <iostream>
    #include <string>
    
    // Define the Person class
    class Person {
    private:
        std::string name;
        int age;
    
    public:
        // Constructor to initialize name and age
        Person(const std::string& n, int a) : name(n), age(a) {}
    
        // Member function to display information
        void displayInfo() {
            std::cout << "Name: " << name << ", Age: " << age << std::endl;
        }
    
        // Getter for the name attribute
        std::string getName() const {
            return name;
        }
    
        // Setter for the age attribute
        void setAge(int newAge) {
            if (newAge >= 0) {
                age = newAge;
            } else {
                std::cerr << "Error: Age cannot be negative." << std::endl;
            }
        }
    };
    
    int main() {
        // Create an instance of the Person class
        Person person1("John Doe", 25);
    
        // Display information using the member function
        person1.displayInfo();
    
        // Get the name using the getter
        std::cout << "Name: " << person1.getName() << std::endl;
    
        // Update the age using the setter
        person1.setAge(30);
        person1.displayInfo();
    
        // Try to set a negative age (will result in an error message)
        person1.setAge(-5);
    
        return 0;
    }
    