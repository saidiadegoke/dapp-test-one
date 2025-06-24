AjoFi Test Campaign: Wealth Distribution (1 ETH / 20 Participants)

## Campaign Overview

This document outlines a test campaign for the 'Wealth Distribution' type on the AjoFi platform. The primary purpose of this campaign is to thoroughly test the functionality, governance mechanisms, and disbursement process of the Wealth Distribution campaign type. It simulates a scenario where a fixed amount of ETH is distributed among a selected group of beneficiaries based on predefined criteria and a transparent selection process.

## Campaign Details

-   **Campaign Type**: Wealth Distribution
-   **Campaign Name**: WD-Test-1ETH-20P
-   **Distributor**: Test Distributor Account (e.g., `0x...`)
-   **Total Fund for Distribution**: 1 ETH
-   **Number of Beneficiaries**: 20
-   **Disbursement Amount per Beneficiary**: 0.05 ETH (1 ETH / 20 participants)
-   **Blockchain Network**: Base Blockchain (or Ethereum, as configured for testing)
-   **Duration**: 7 days for application, 3 days for moderation/selection, 1 day for disbursement.

## Rules for Qualification

Applicants must meet the following dummy criteria for this test campaign:

1.  **Wallet Connected**: Must have a valid AjoFi-compatible wallet connected.
2.  **KYC Status**: (Optional, depending on test setup) Must have a 'Verified' KYC status.
3.  **Application Form**: Must submit a complete application form via the AjoFi dApp.
4.  **Proof of Need**: (Dummy requirement) Upload a placeholder document (e.g., a blank PDF) as 'proof of qualification'.

## Application Process (Applicant Activities)

1.  **Discover Campaign**: Applicant navigates to the 'Wealth Distribution' section on AjoFi and finds 'WD-Test-1ETH-20P'.
    -   *Expected Result*: Campaign details are visible, including rules and application button.
2.  **Review Rules**: Applicant reads the campaign description and qualification rules.
    -   *Expected Result*: Applicant understands the requirements for applying.
3.  **Submit Application**: Applicant clicks 'Apply', fills out the dummy application form, and uploads the placeholder 'proof of qualification' document.
    -   *Expected Result*: Application is successfully submitted and appears in the campaign's 'Applicants' list with 'Pending' status.

## Moderation and Beneficiary Selection (Moderator Activities)

1.  **Access Applications**: Assigned Moderators log in and access the 'WD-Test-1ETH-20P' campaign dashboard.
    -   *Expected Result*: A list of all submitted applications is visible, with details and attached documents.
2.  **Review Applications**: Each Moderator reviews applications against the qualification rules.
    -   *Expected Result*: Moderators can view application details and mark them as 'Qualified' or 'Disqualified'.
3.  **Propose Beneficiaries**: Moderators propose a list of 20 qualified beneficiaries.
    -   *Expected Result*: A proposal for beneficiary selection is created within the campaign's governance section.
4.  **Vote on Beneficiaries**: Moderators (and potentially other designated governance participants) vote on the proposed list of beneficiaries.
    -   *Expected Result*: Votes are recorded on-chain. The proposal passes if it meets the predefined quorum and approval thresholds.
5.  **Finalize Selection**: Once the proposal passes, the list of 20 beneficiaries is finalized by the smart contract.
    -   *Expected Result*: The campaign status updates to 'Beneficiaries Selected', and the disbursement process is initiated.

## Disbursement Process

1.  **Automated Disbursement**: The AjoFi smart contract automatically initiates the disbursement of 0.05 ETH to each of the 20 selected beneficiaries.
    -   *Expected Result*: 20 separate transactions are broadcast on the blockchain, transferring 0.05 ETH to each beneficiary's wallet.
2.  **Beneficiary Receipt**: Selected beneficiaries receive 0.05 ETH in their connected wallets.
    -   *Expected Result*: Beneficiaries can see the incoming transaction in their wallet and on a blockchain explorer.

## Governance Details

-   **Distributor**: Sets initial campaign parameters, funds the smart contract, and defines qualification rules.
    -   *Activities*: Create campaign, fund campaign, monitor progress.
    -   *Expected Result*: Campaign is active and funded.
-   **Applicants**: Submit applications for consideration.
    -   *Activities*: Apply to campaign, provide required information/documents.
    -   *Expected Result*: Application is recorded and reviewed.
-   **Moderators**: Review applications and participate in beneficiary selection.
    -   *Activities*: Access applications, review details, vote on proposals for beneficiary selection.
    -   *Expected Result*: Fair and transparent selection of beneficiaries.
-   **Smart Contract**: Enforces rules, manages funds, and automates disbursements.
    -   *Activities*: Holds funds, processes applications, executes voting, disburses funds.
    -   *Expected Result*: Campaign operates autonomously according to its code.

## Testing Focus

This campaign is designed to test:
-   Application submission and review flow.
-   Moderator role and voting mechanism for beneficiary selection.
-   Automated disbursement of funds to multiple beneficiaries.
-   Transparency of the selection process on-chain.
-   Handling of various application statuses (pending, qualified, disqualified, selected).




AjoFi Test Campaign: Wealth Distribution (10 ETH / 100 Participants)

## Campaign Overview

This document outlines a larger-scale test campaign for the 'Wealth Distribution' type on the AjoFi platform. The primary purpose of this campaign is to test the platform's scalability, performance, and the robustness of its governance and disbursement mechanisms when dealing with a higher number of participants and a larger fund. It simulates a scenario where a significant amount of ETH is distributed among a larger group of beneficiaries.

## Campaign Details

-   **Campaign Type**: Wealth Distribution
-   **Campaign Name**: WD-Test-10ETH-100P
-   **Distributor**: Large Scale Test Distributor Account (e.g., `0x...`)
-   **Total Fund for Distribution**: 10 ETH
-   **Number of Beneficiaries**: 100
-   **Disbursement Amount per Beneficiary**: 0.1 ETH (10 ETH / 100 participants)
-   **Blockchain Network**: Base Blockchain (or Ethereum, as configured for testing)
-   **Duration**: 14 days for application, 7 days for moderation/selection, 3 days for disbursement.

## Rules for Qualification

Applicants must meet the following dummy criteria for this test campaign:

1.  **Wallet Connected**: Must have a valid AjoFi-compatible wallet connected.
2.  **KYC Status**: (Optional, depending on test setup) Must have a 'Verified' KYC status.
3.  **Application Form**: Must submit a complete application form via the AjoFi dApp.
4.  **Proof of Need**: (Dummy requirement) Upload a placeholder document (e.g., a blank PDF) as 'proof of qualification'.
5.  **Geographic Restriction**: (Dummy requirement) Must reside in a specific test region (e.g., 'Testlandia').

## Application Process (Applicant Activities)

1.  **Discover Campaign**: Applicant navigates to the 'Wealth Distribution' section on AjoFi and finds 'WD-Test-10ETH-100P'.
    -   *Expected Result*: Campaign details are visible, including rules and application button.
2.  **Review Rules**: Applicant reads the campaign description and qualification rules, noting the larger scale and specific restrictions.
    -   *Expected Result*: Applicant understands the requirements for applying.
3.  **Submit Application**: Applicant clicks 'Apply', fills out the dummy application form, and uploads the placeholder 'proof of qualification' document. They also indicate their dummy 'Testlandia' residence.
    -   *Expected Result*: Application is successfully submitted and appears in the campaign's 'Applicants' list with 'Pending' status.

## Moderation and Beneficiary Selection (Moderator Activities)

1.  **Access Applications**: Assigned Moderators (a larger group for this campaign) log in and access the 'WD-Test-10ETH-100P' campaign dashboard.
    -   *Expected Result*: A list of all submitted applications is visible, with details and attached documents.
2.  **Review Applications**: Each Moderator reviews applications against the qualification rules, paying attention to the geographic restriction.
    -   *Expected Result*: Moderators can view application details and mark them as 'Qualified' or 'Disqualified'.
3.  **Propose Beneficiaries**: Moderators collaborate to propose a list of 100 qualified beneficiaries.
    -   *Expected Result*: A proposal for beneficiary selection is created within the campaign's governance section.
4.  **Vote on Beneficiaries**: Moderators (and potentially other designated governance participants) vote on the proposed list of beneficiaries. This might involve multiple rounds of voting due to the larger number of beneficiaries.
    -   *Expected Result*: Votes are recorded on-chain. The proposal passes if it meets the predefined quorum and approval thresholds.
5.  **Finalize Selection**: Once the proposal passes, the list of 100 beneficiaries is finalized by the smart contract.
    -   *Expected Result*: The campaign status updates to 'Beneficiaries Selected', and the disbursement process is initiated.

## Disbursement Process

1.  **Automated Disbursement**: The AjoFi smart contract automatically initiates the disbursement of 0.1 ETH to each of the 100 selected beneficiaries.
    -   *Expected Result*: 100 separate transactions are broadcast on the blockchain, transferring 0.1 ETH to each beneficiary's wallet.
2.  **Beneficiary Receipt**: Selected beneficiaries receive 0.1 ETH in their connected wallets.
    -   *Expected Result*: Beneficiaries can see the incoming transaction in their wallet and on a blockchain explorer.

## Governance Details

-   **Distributor**: Sets initial campaign parameters, funds the smart contract, and defines qualification rules. For this larger campaign, the distributor might also define a larger pool of moderators.
    -   *Activities*: Create campaign, fund campaign, monitor progress, potentially appoint more moderators.
    -   *Expected Result*: Campaign is active and funded, with sufficient moderation capacity.
-   **Applicants**: Submit applications for consideration, adhering to all specified criteria.
    -   *Activities*: Apply to campaign, provide required information/documents, ensure all criteria (e.g., geographic) are met.
    -   *Expected Result*: Application is recorded and reviewed.
-   **Moderators**: Review applications and participate in beneficiary selection. Due to the larger scale, efficient coordination and potentially sub-group reviews are expected.
    -   *Activities*: Access applications, review details, vote on proposals for beneficiary selection, potentially coordinate with other moderators.
    -   *Expected Result*: Fair and transparent selection of beneficiaries, even at a larger scale.
-   **Smart Contract**: Enforces rules, manages funds, and automates disbursements.
    -   *Activities*: Holds funds, processes applications, executes voting, disburses funds.
    -   *Expected Result*: Campaign operates autonomously according to its code, handling a larger volume of transactions.

## Testing Focus

This campaign is designed to test:
-   Scalability of the application and smart contracts with a higher number of applicants and beneficiaries.
-   Performance of the moderation and voting mechanisms under increased load.
-   Robustness of the automated disbursement process for a large number of transactions.
-   Handling of additional qualification criteria (e.g., geographic restrictions).
-   Overall system stability and efficiency for large-scale wealth distribution.



AjoFi Test Campaign: Savings Circles (10 Members / 0.01 ETH Weekly)

## Campaign Overview

This document outlines a test campaign for the 'Savings Circles' type on the AjoFi platform. The primary purpose of this campaign is to test the functionality, rotating payout mechanism, and participant management of the Savings Circles campaign type. It simulates a traditional 'Esusu' or 'ROSCA' (Rotating Savings and Credit Association) where members contribute regularly and receive a lump sum payout on a rotating basis.

## Campaign Details

-   **Campaign Type**: Savings Circles
-   **Campaign Name**: SC-Test-10M-0.01ETH-Weekly
-   **Creator**: Test Circle Creator Account (e.g., `0x...`)
-   **Number of Members**: 10
-   **Weekly Contribution per Member**: 0.01 ETH
-   **Total Weekly Payout**: 0.1 ETH (10 members * 0.01 ETH)
-   **Total Campaign Duration**: 10 weeks (until every member has received a payout)
-   **Blockchain Network**: Base Blockchain (or Ethereum, as configured for testing)
-   **Payout Schedule**: Weekly, on a rotating basis.

## Rules for Participation

Members must adhere to the following rules for this test campaign:

1.  **Commitment**: Each member commits to contributing 0.01 ETH every week for 10 consecutive weeks.
2.  **Timeliness**: Contributions must be made by the designated weekly deadline.
3.  **Order of Payout**: The order in which members receive the collective sum is predetermined at the campaign's inception (e.g., by random draw, mutual agreement, or first-come-first-served).

## Participation Process (Member Activities)

1.  **Join Campaign**: A member navigates to the 'Savings Circles' section on AjoFi and joins 'SC-Test-10M-0.01ETH-Weekly'.
    -   *Expected Result*: Member is added to the campaign's participant list.
2.  **Make Weekly Contribution**: Each week, every member (except the one receiving the payout for that week) contributes 0.01 ETH to the campaign's smart contract.
    -   *Expected Result*: Contribution is recorded on-chain, and the campaign's total collected funds increase.
3.  **Receive Payout (when it's their turn)**: When it's a member's turn in the rotation, they receive the collective sum of 0.1 ETH from the smart contract.
    -   *Expected Result*: 0.1 ETH is automatically transferred to the member's wallet.
4.  **Monitor Progress**: Members can view the campaign's progress, including contributions made, payouts received, and remaining weeks.
    -   *Expected Result*: Transparent tracking of all financial activities within the circle.

## Governance Details

-   **Creator**: Defines the initial rules, number of members, contribution amount, and payout schedule. Funds the initial smart contract deployment.
    -   *Activities*: Create campaign, invite members, monitor initial setup.
    -   *Expected Result*: Campaign is active and ready for contributions.
-   **Members**: Contribute regularly and receive payouts according to the schedule. Participate in any minor governance decisions (e.g., rescheduling a contribution if allowed by rules).
    -   *Activities*: Make weekly contributions, receive payouts, potentially vote on minor rule adjustments.
    -   *Expected Result*: Campaign progresses smoothly with all members fulfilling their obligations.
-   **Smart Contract**: Enforces the rules, manages the pooled funds, and automates the weekly disbursements based on the predetermined rotation.
    -   *Activities*: Holds funds, processes contributions, executes weekly payouts to the designated member.
    -   *Expected Result*: Campaign operates autonomously and fairly, ensuring each member receives their turn.

## Testing Focus

This campaign is designed to test:
-   The automated weekly contribution and payout mechanism.
-   The rotation logic for disbursing funds to each member.
-   Participant tracking and status updates within the circle.
-   Handling of missed contributions (if rules for this are implemented).
-   Overall stability and reliability of the Savings Circles smart contract over multiple weeks.


