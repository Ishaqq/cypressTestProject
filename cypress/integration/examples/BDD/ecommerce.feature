Feature: End to end Ecommerce validation

  application Regression

    Scenario: Ecommerce Products delivery
    Given I open Ecommerce Page
    When I add items to Cart
    And Validate the total price
    Then Select the country submit  and verify Thankyou

    Scenario: Filling the form to group
    Given I open Ecommerce Page
    When I fill the form detail
    |name |gender |
    |bobz |Male   |
    Then validate the forms behaviour
    And Select the Shop Page