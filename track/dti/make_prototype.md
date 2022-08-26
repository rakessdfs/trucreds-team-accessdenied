# Prototype Documentation

### Prepare Environment
1. Install the Connect.Me Digital Wallet mobile application on your iphone or android device.  It is available for free from the Apple AppStore for your iphone device, or from Google Play for your android device.

2. Create one or more Verity Flow accounts by sending an email of the following form to [Natalia Moskaleva](mailto:natalia.moskaleva@avast.com):

   Subject: DFS TruCreds Hackathon - Request for Verity Flow account(s)

   Team: Access Denied
   Discover email addresses: 
   | Name | Business Unit |
   | --- | --- |
   | [Chandramohan Sadasivam](mailto:chandramohansadasivam@discover.com) | Discover Personal Loans |
   | [Crystal Ritchey](mailto:crystalritchey@discover.com) | Discover Personal Loans |
   | [Pranav Pratap](mailto:pranavpratap@discover.com) | Discover Personal Loans |
   | [Rakesh Kumar Sharma](mailto:rakeshkumarsharma@discover.com) |Discover Enterprise Products |


   * A separate Verity Flow account will be created for each email address listed.
   * An email will be sent to each address with login information.
   * Wait until you receive this login information.

3. Login to Verity Flow [here](https://verity-flow.pps.evernym.com) from your DFS or personal laptop.

   * When you initially login, you will be asked to set up multi-factor authentication; choose the "Remind Me Later" option.

### Use Case Process Steps 

#### 1: Create Issuer for dLocker - 3 issuer we have created 

| S. No. | Issuer Name | Issuer Description |
| --- | --- | --- |
| 1 | DAuth | Consists of customer PII information |
| 2 | DLocker Access | Consists of DAuth + Locker DID |
| 3 | DLocker Recovery |Consists of DAuth + Recovery phrase |

   * dLocker Verity flows used
   ![](./images/dlocker-flows.png)

   * DAuth Issuer Attributes
   ![](./images/dauth-flow-2.png)

   * DLocker Access Issuer Attributes
   ![](./images/dlocker-issuer-flow-1.png)

   * DLocker Recovery Issuer Attributes
   ![](./images/dlocker-recovery-issuer-1.png)

### 2: DAuth issues DLocker Credential
   
   * DAuth Issuer Scan
   ![](./images/dauth-scan.png)

### 3: Display DAuth issuer details 

   * DAuth Issuer details
   ![](./images/dauth-scan-issued.png)

### 4: Create DAuth Verifier

   * DAuth Verifier Scan
   ![](./images/dauth-scan-verify.png)

### 5: ABC verifies Employee Credential 

   * DAuth Verified Scan
   ![](./images/dauth-scan-verified.png)
