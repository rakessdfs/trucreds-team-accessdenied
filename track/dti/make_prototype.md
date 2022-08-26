# DLocker Prototype Documentation

### Prepare Environment
* Completed. See below verify flow for dLocker prototype.

* dLocker Verity flows used
![](./images/dlocker-flows.png)

### Use Case Process Steps 

#### 1: Create Issuer for dLocker - 3 issuer we have created 

| S. No. | Issuer Name | Issuer Description |
| --- | --- | --- |
| 1 | DAuth | Consists of customer PII information |
| 2 | DLocker Access | Consists of DAuth + Locker DID |
| 3 | DLocker Recovery |Consists of DAuth + Recovery phrase |

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
