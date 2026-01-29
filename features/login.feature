Feature: Login to inspektra

Scenario: Login as SP

Given Navigate to url "https://elektra.elektrarms-staging.com/"
When Enter the login details "s.polydorou@hyperiosoftware.com" and "Hyperio1234!"
Then Validate dashbaord

