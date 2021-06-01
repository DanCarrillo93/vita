# VITA (Virtual Item Trading App)

## Description

Every good README has a description of what goal the project accomplishes. The following section describes what this project does:

    This app allows a user to find other gamers who are looking to buy and sell their Counter Strike weapon skins. Seeing as how Steam takes a large percentage of all skins sold on their website, its only fair that some would want to circumvent this cut into their profits, especially if their items are totalling into several hundreds of dollars or more.

## Table of Contents

[Installation](#install) | [Usage](#usage) | [Contribute](#contribute)

## Install

Sometimes the steps to get a project working can be confusing so it is important to give instructions on how to install your project. The following section describes this process:

    After cloning this project, you can run "npm i" to download all of the required dependencies. Next, running "node seeder/seed.js" to seed the database with the API data.

## Usage

Since there could be several ways to input information into a project, it is important to state how it should be used. The following section describes the functionality of each page:

### Login / Sign-up Pages

- Create a new profile with username, email, password, and steam ID
- Validation on login page for profiles created on sign-up page

### Home Page

- View bundles from other users
- Bundles have information on amount of items in the bundle, the price of the bundle, and a link to a page to view the bundle in detail.

### Listings Page

- After clicking on view bundle from the homepage, you will be brought to a page with information on every item in the bundle
- Each individual item has information on average price, lowest price, and quantity traded in the last 30 days
- Clicking on buy bundle will put the skins into your inventory and reduce your balance by how much the bundle cost
- After a few seconds, you will be redirected to the dashboard page

### Dashboard Page

- On the dashboard, you can add items into your inventory by setting a weapon type, skin name, and condition
- When you have skins in your inventory, you are now able to start creating bundles by clicking "add to bundle"
- You can add as many skins as you want to a bundle and then set a price for it

## Contribute

Code is never really finished being added to, and this addition could come from developers other than the original creator. The following section describes how to contribute to this project:

    For the future development of this app, there are several features that still need to be implemented. Users should be able to link their real steam inventories, a users balance should be hooked up to some sort of payment app such as Paypal, and users should be able to update an existing bundle to add or remove items.
