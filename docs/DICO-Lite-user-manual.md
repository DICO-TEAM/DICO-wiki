---
sidebar_position: 1
---

# DICO Lite User Manual



First download and install DICO_App, [App Download Link](https://dico.io/app/dico.apk)

## 1 Create Account / Import Account

Launch the app, enter your account details and jargon to create an account.
**(Be sure to back up your mnemonics)**



<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/create_account.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/create_account2.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/create_account3.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/create_account4.jpg" width="200" />



## 2 KYC Certification

### 2.1 Apply to become an IAS or SwordHolder

**Through "Council" - "motions", "Propose motion" - "Vote" - "Close" to add IAS and Swordholder, you can also apply through "Democracy"; the following is an example of an application in "Democracy".**

Open [polkadot apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.tico.dico.io#/explorer/?rpc=wss%3A%2F%2Frpc.tico.dico.io#/explorer) to access the dico chain and go to the democracy page

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/kyc_ias/democracy_homepage.png"/>



#### 2.1.1 democracy-proposals

```
A collateral amount (e.g. 10,000 dico) is required to apply to become an IAS or SwordHolder
```



##### 2.1.1.1 submit preimage

Submit the kyc.addias method preimage and copy the preimage hash (e.g. 0xca556a009de018c12cfe64e5405f765d9a123638aa938c491019862ee88ee315) to facilitate the submission of the motion in the next step

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/kyc_ias/submit_preimage.png"/>



##### 2.1.1.2 submit proposal

Using the preimage hash from the previous step, perform the submit proposal operation<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/kyc_ias/submit_proposal.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/kyc_ias/submit_proposal1.png"/>



##### 2.1.1.3 second proposal

Any account with a transferable amount will be second and the period will expire in the referenda voting queue<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/kyc_ias/democracy_second1.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/kyc_ias/democracy_second2.png"/>



#### 2.1.2 democracy-referenda

##### 2.1.2.1 vote

Vote on the motions in the referenda queue, when the period expires they go to the dispatch queue

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/kyc_ias/democracy_vote.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/kyc_ias/democracy_vote1.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/kyc_ias/democracy_vote2.png"/>

##### 2.1.2.2 dispatch queue

The motion is already in the dispatch queue, so you just need to wait for the period to expire to perform the kyc.addIas operation.

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/kyc_ias/democracy_dispatch.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/kyc_ias/democracy_executed.png"/>



#### 2.1.3 View ias/SwordHolder list information

Go to Storage in Chain state and select kyc.iASListOf to see if the Ias role has been added (there was 1 ias in the queue, 1 more was added via democracy request)<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/kyc_ias/kyc_IasLists1.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/kyc_ias/kyc_IasLists2.png"/>



### 2.2 SetKyc

**Create or import an account into DICO Lite, and perform the setKyc operation. **

Me-->KYC-->"+", select Area/country, enter Name, Send Public key, email and set kyc information.

**Currently set kyc collateral amount 100 DICO.**



<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/setkyc1.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/setkyc2.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/setkyc3.jpg" width="200" />



### 2.3 kyc user randomly obtains IAS and Swordholder information

Me-->KYC-->Apply certification, enter the values of the fields, max_fee, and fetch them.

The max_fee must be >= the sum of the smallest IAS_fee and Swordholder_fee values for the current kyc_fields, if it is too small then no IAS or Swordholder is returned.

For example: if the IAS_fee is 10 DICO and the Swordholder_fee is 5 DICO, enter 20 DICO for max_fee.

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/Apply_certification.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/Apply_certification2.jpg" alt="Apply_certification2" width="200" />



### 2.4 kyc user request IAS authentication

Me-->KYC-->Request Judgement, enter kyc_fields, IAS_index, message parameter values to request IAS authentication

**Request IAS authentication requires collateral amount = IAS_fee + Swordholder_fee**

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/Apply_certification2.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/Request_Judgement1.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/Request_Judgement2.jpg" width="200" />



### 2.5 Ias review kyc requests

(1) Me-->KYC-->"⚙" page, select the kyc user to be audited, perform <u>Get Kyc image hash</u> to view the uploaded credentials, and enter the Kyc info ID and encrypt it to submit for IAS audit.

**id Unique, cannot be duplicated**



<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/iasProvideJudgement1.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/iasProvideJudgement2.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/iasProvideJudgement3.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/iasProvideJudgement4.jpg"  width="200" />



(2) Me-->KYC-->Certification list, Ias the Kyc is approved and the information is as shown:



<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Me/Me-home.jpg" alt="Me-home" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/iasProvideJudgement-iasDone.jpg"  width="200" />



### 2.6 Swordholder Review kyc requests

(1) Me-->KYC-->"⚙" page, select the kyc user to be audited, proceed to Get Kyc image hash to view the uploaded credentials and enter the Kyc info ID for Swordholder audit.

**id Enter the id entered in the previous IAS audit step and must be consistent

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/iasProvideJudgement1.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/swordHolderProvideJudgement1.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/swordHolderProvideJudgement2.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/swordHolderProvideJudgement3.jpg"  width="200" />



**If the audit result is Success, the amount pledged by the kyc user to request an IAS audit will be deducted and distributed to the IAS and Swordholder role accounts. **

**If the audit result is Failure, the amount pledged by the kyc user to request an IAS audit will be refunded; the user will be able to request IAS certification again. **



(2) Me-->KYC-->Certifition list, Swordholder审核Kyc通过，进入kyc用户的kyc界面，信息如图:

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Me/Me-home.jpg" alt="Me-home" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/supervisorProvideJudgement-Success.jpg"  width="200" />

### 2.8 Clear kyc
Go to the Me-->KYC-->Certification list page and perform a kyc cancellation.

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/supervisorProvideJudgement-Success.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/Kyc_Clear.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Kyc/Kyc_Clear2.jpg"  width="200" />



## 3 Multi-asset management

### 3.1 Adding Assets

Go to Me-->Assets-->"+", enter the asset id and add the asset

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Me/Me-home.jpg" alt="Me-home" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Me/add-Assets.jpg" alt="Me-home" width="200" />



### 3.2 Transfer transactions

(1) Go to Me->Assets, select any asset, click "Transfer" to enter the transfer screen, enter the receiving address, the amount, or scan the code to make the transfer

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Me/Me-home.jpg" alt="Me-home" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Me/transfer1.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Me/transfer2.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Me/transfer3.jpg" width="200" />



(2) Go to Me->Assets, select any asset and click on "Receive" to enter the receiving QR code interface, you can scan the code to transfer money in person

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Me/Me-home.jpg" alt="Me-home" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Me/transfer1.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Me/Receive.jpg" width="200" />

## 4 ICO

### 4.1 The project owner initiates the ICO request

The project owner's account goes to the ICO->"➕" screen, enters the ICO project information and initiates the ICO request;

```
-- The fundraising asset ID and target asset ID exist and the metadata has been set

-- not yet in the PendingIco queue

-- Pledges the number of tokens the user uses for the ico and the amount needed to launch the ico (current pledge is 100 dico)

-- pledge 1% of the amount of mainstream coins raised by the user, if the balance is not enough, the user cannot launch an ico (e.g. if the amount of mainstream coins raised is 10,000 usdt, then the amount of mainstream coins pledged is 100 usdt)

-- Request information is written to `PendingIco`.
```

    desc: Vec<u8>, // description information for the ico
    currency_id: CurrencyId, // Asset id of the project's token
    official_website: Vec<u8>, // official website address
    user_ico_max_times: u8, the maximum number of times a single user can participate in an ico
    is_must_kyc: bool, // whether the user must kyc
    total_issuance: Balance, // the total amount of tokens issued by the project
    total_circulation: Balance, // the circulation of the project's tokens
    ico_duration: BlockNumber, // how long the ico has been alive
    total_ico_amount: Balance, // the number of coins taken out of the ico (the project's coins)
    user_min_amount: Balance, // minimum amount per person (using mainstream coins as unit of measure)
    user_max_amount: Balance, // the maximum amount per person (measured in mainstream coins)
    exchange_token: CurrencyId, // the asset id of the mainstream coin
    total_exchange_amount: Balance, // the number of mainstream coins exchanged
    exclude_area: Vec<Countries>, // countries that cannot participate in ico
    lock_proportion: Percent, // proportion of user's trivial positions
    unlock_duration: BlockNumber, // how often to unlock
    per_duration_unlock_amount: Balance, // how much to unlock at once

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/Add-project0.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/Add-project1.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/Add-project2.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/Add-project3.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/Add-project4.jpg" width="200" />



### 4.2 Council agrees/rejects ICO request

Open the [Polkadot apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.tico.dico.io#/explorer) page, go to the Governance-Council-Motions page and do Propose motion-->Vote-->Close to do so

#### 4.2.1 Council agrees to the ICO request

```
-- If the yes vote for the ICO request wins, the information is added to `Ico'; and the amount pledged by the project owner is released and 1% of the amount of mainstream coins pledged for the user's fundraising is transferred to the treasury

-- If the no vote for the ICO plea wins, the ICO is still in `PendingIco`; the council can submit a motion to approve/reject the ICO request again for a vote
```

(1) Council motion

The council member selects the "Propose motion" button and invokes ico.permitIco to enter the currencyId and initiate the motion to permitIco

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/ico/council-permitIco-1.png"/><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/ico/council-permitIco-2.png"/>

(2)Members of council  vote

Members of council  select the "Vote" button to vote for or against the motion

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/ico/council-permitIco-vote-1.png"/><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/ico/council-permitIco-vote-2.png"/>

(3)The vote is closed and the motion is closed manually

The member of council  selects the "Close" button to close the motion.

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/ico/council-permitIco-close-1.png"/><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/ico/council-permitIco-close-2.png"/><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/ico/council-permitIco-close-3.png"/>





#### 4.2.2 Council rejects ICO request

```
-- If the yes vote to reject the ICO request wins, the ICO record is deleted and the project owner is penalised for the amount pledged; 1% of the number of mainstream coins pledged to the user's fundraising and the number of tokens pledged to the user's ico are returned

-- If the vote against rejecting the ICO wins, the ICO is still in `PendingIco`; the council can submit a motion to approve/reject the ICO request again for a vote
```

(1)Council motion

The council member selects the "Propose motion" button and invokes ico.rejectIco to enter the currencyId and initiate a motion to rejectIco

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/ico/council-rejectIco-1.png"/><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/ico/council-rejectIco-2.png"/>

(2) Members of council   vote

Members of council select the "Vote" button to vote for or against the motion

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/ico/council-rejectIco-vote-1.png"/><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/ico/council-rejectIco-vote-2.png"/>

(3) The vote is closed and the motion is closed manually

The member of council  selects the "Close" button to close the motion.<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/ico/council-rejectIco-close-1.png"/><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/ico/council-rejectIco-close-2.png"/><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/ico/council-rejectIco-close-3.png"/>





### 4.3 Participating in ICO

ICO-->Ongoing, select the corresponding ico project and participate in the ICO.

  **-- If the participation in the ICO is successful, the user's tokens will be transferred to the project and locked, the project's reserved tokens will be transferred to the user's account and the position will be closed**



<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/Add-project0.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/ico-join1.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/ico-join2.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/ico-join3.jpg" width="200" />



### 4.4 DAO terminates project ICO

(1) dao to propose a motion to terminate the project ICO

Participating Ico users, for projects that have not yet expired or have been terminated, will dao to terminate the project Ico.

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/ico/ico-dao-terminateIco.png"/>

(2) Voting by DAO members

For those participating in the project's ICO, go to the DAO page, select the motion being voted on, and vote for/against it

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/ico/ico-dao-terminateIco-vote.png"/>

(3) Voting is closed, close the motion manually

Voting is now closed and users who have participated in the ICO for this project can close the motion by going to the Dao page and selecting the motion for which voting has been completed

```
-- If the Yes vote wins, the ICO for the project is forcibly terminated and the user can no longer participate in the ICO
-- If the vote against the project wins, the ICO of the project remains unchanged and the user can continue to participate in the ICO if it has not expired
```







### 4.5 Project owner requests release of assets

(1) The project owner goes to Ico --> "⚙" --> "..." -->Request release, to make a request for release of funds

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/Add-project0.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/ico-request release.jpg" sllot width="200" />



### 4.6 Proposals for cancellation of funding requests by project parties

(1) The project owner goes to Ico --> "⚙" --> "..." -->cancel Request release, to cancel the proposal for funding

```
* A record of a request (applied for but not yet approved)
* Penalty of 1/2 of the pledged amount `RequestPledge' and release of the remaining 1/2 of the pledged amount (e.g. pledge 300 dico, destroy 150 dico and return 150 dico to the project owner)
```



### 4.7 Project DAO permission to release funds request

(1) DAO to submit a request for permission to release funds

For users participating in the project ICO, go to DAO-->"+" and select the request that is waiting for a motion to be submitted to submit a motion to allow the release of funds



<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/dao-vote1.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/Dao-create motion.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/Dao-create motion1.jpg" width="200" />

(2) Voting by DAO members

To participate in the ICO of the project, go to the DAO page, select the DAO motion you are voting on and vote for/against it

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/dao-vote1.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/dao-vote2.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/dao-vote3.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/dao-vote4.jpg"  width="200" />

(3) Voting is closed, close the motion manually

Voting has closed, users who participated in the ICO for this project go to the DAO page and close the motion by selecting the motion for which voting has closed

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/dao-close.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/dao-close1.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/dao-close2.jpg" width="200" />



```
-- If the Yes vote wins, the ICO for the project is forcibly terminated and the user can no longer participate in the ICO
-- If the vote against the project wins, the ICO of the project remains unchanged and the user can continue to participate in the ICO if it has not expired
```



### 4.8 Get Reward(DICO)

(1) For participating Ico users, go to the ICO-->Participated page and click on the Reward (DICO) 🔐 icon to claim your reward

** Calculation method (note the accuracy conversion):**

```
1. according to the halving rule:
The first 200 million usdt corresponds to 1 billion dico rewards (5 dico per usdt)
The second 200 million usdt corresponds to 500 million dico rewards (2.5 dico per usdt)
...
Calculate the total amount of power (total dico) corresponding to this usdt
2. av_usdt = total_usdt / 10
3. segment the user dico amount according to the individual dico record tag and av_usdt in unrelease
4. find the amount of the reward for each segment and add it up, the final result is the current reward
5. 10 segments (1 2 3 4 5 6 7 8 9 10) with the following power shares [1.5,1.4,1.3,1.2,1.1,0.9,0.8,0.7,0.6,0.5]
-----------------------------------------------------------------
```

```
For example:
1. current_total_usdt=0
2. launch a project ico, fundraising 200 million usdt (in the first 200 million usdt corresponds to 1 billion dico rewards)
3. ABCD 4 accounts participate in ICO, the amount of participation is 25 million (mainstream coin price is 2 usdt/DICO, the total_usdt of a single account = 50 million), according to the formula derived from
total_usdt=200 million, then the total count is 1 billion DICO, which translates to dico=1 billion/10^4=100000 DICO
total_Rewards=1 billion dico
av_usdt=200 million usdt/10=20 million usdt
The calculation based on the percentage of participating ico counts is as follows:
aAccount Rewards=(20 million*1.5+20 million*1.4+10 million*1.3)/200 million*1 billion =71 million*5=355 million DICO
b Account Reward = (10 million * 1.3 + 20 million * 1.2 + 20 million * 1.1) / 200 million * 1 billion = 59 million * 5 = 295 million DICO
c Account Reward = (20 million * 0.9 + 20 million * 0.8 + 10 million * 0.7) / 200 million * 1 billion = 41 million * 5 = 205 million DICO
d account reward = (10 million * 0.7 + 20 million * 0.6 + 20 million * 0.5) / 200 million * 1 billion = 29 million * 5 = 145 million DICO
abcd total reward = 355 million + 295 million + 205 million + 145 million = 1 billion DICO
```

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/ico-getReward.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/ico-getReward1.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/ico-getReward2.jpg"  width="200" />



### 4.9 Manual release of assets by the user (or project owner)

(1) For participating Ico users, go to the Ico-->Participated page, select the assets that can be released and click on the 🔐 icon of Releasable (DICO) to release the assets manually

```
-- The project owner will release the assets manually, all of them will be released and no position will be locked
-- the user manually releases the assets, according to the project requirements locking ratio requirements to lock positions, each cycle can be unlocked specified proportion of the amount (such as locking 120 dico, 1 month to unlock once, then a release of 30 dico; if the 3 months are not to manually unlock, after the collection will be directly released 120 dico)
```

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/ico-userReleaseIcoAmount1.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/ico-userReleaseIcoAmount2.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/ico-userReleaseIcoAmount3.jpg"  width="200" />



### 4.10 Users unlocking their own assets

(1) Participating Ico users, go to the Ico-->Participated page, select the assets that can be unlocked and click on the 🔐 icon of Unlockable (DICO) to unlock the assets

```
1. Assets that are eligible for unlocking can be unlocked for a specified percentage of each cycle (e.g. a locked position of 120 dico, unlocked once a month, will release 30 dico at a time; if the 3 months are not manually unlocked, the 120 dico will be released directly after collection)
-- If not, no unlocked amount is available
```

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/ico-unlock1.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Ico/ico-unlock2.jpg"  width="200" />



## 5 DAO governance (as an example of a project DAO allowing a request for funds to be released)



### 5.1 DAO Motion

To participate in the ICO of the project, go to the DAO->"➕" screen, select the request that is waiting for a motion to be submitted, and make a motion to allow the release of funds

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/Dao-create motion.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/Dao-create motion1.jpg" width="200" />



### 5.2 Voting by DAO members

Participate in the ICO of the project, go to the DAO interface, select the DAO motion you are voting on and vote for/against it

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/dao-vote1.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/dao-vote2.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/dao-vote3.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/dao-vote4.jpg"  width="200" />



###  5.3 Voting is closed, close the motion manually

Voting has closed, users who participated in the ICO for this project go to the DAO page and select the motion that has closed voting to close the motion

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/dao-close.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/dao-close1.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Dao/dao-close2.jpg" width="200" />



```
-- If the Yes vote wins, the ICO for the project is forcibly terminated and the user can no longer participate in the ICO
-- If the vote against the project wins, the ICO of the project remains unchanged and the user can continue to participate in the ICO if it has not expired
```



## 6 Swap

### 6.1 addLiquidity

The user goes to Swap-->Liquidity-->addLiquidity to perform the add liquidity operation

`token_a`: add the `AssetId` of the transaction to Asset A

`token_b`: add the `AssetId` of the transaction pair Asset B

`amount_a_desired`: the desired number of additions to Asset A

`amount_b_desired`: the expected number of additions for Asset B

`amount_a_min`: the minimum amount of Asset A to be added as set by the user, if the calculated amount of Asset A to be added is less than this value, the additions will be discarded

`amount_b_min`: the minimum number of assets to be added to asset B set by the user, if the number of assets to be added to asset B is calculated to be less than this value, then the additions will be abandoned

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Swap/swap-AddLiquidity1.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Swap/swap-AddLiquidity2.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Swap/swap-AddLiquidity3.jpg"  width="200" />



### 6.2 removeLiquidity

The user goes to Swap-->Liquidity-->Manage-->Remove to remove liquidity.

`remove_liquidity`: the number of liquidity share assets to remove, liquidity share assets are assets that are minted for the user when liquidity is added

`amount_a_min`: the minimum number of asset A that can be accepted when removing liquidity, when the program calculates that the number of asset A does not meet the condition, the removal is abandoned

`amount_b_min`: the smallest amount of asset B that can be accepted when removing liquidity, or aborted when the program calculates that the amount of asset B does not meet the condition

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Swap/swap-removeLiquidity1.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Swap/swap-removeLiquidity2.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Swap/swap-removeLiquidity3.jpg"  width="200" />



### 6.3 swap(exchange)

#### 6.3.1  swap_tokens_for_exact_tokens

The user goes to the Swap-->Swap screen and makes an exchange.

Use no more than the `amount_in_max` amount of assets to attempt to exchange for an exact amount of `amount_out` of another asset.

- `amount_out`: the exact number of target assets to be exchanged
- `amount_in_max`: the maximum number of assets to be paid, when the calculated asset is greater than this value, then no redemption is made

- `path`: the redemption path, which is found by the front-end from the `PairKey` to find the best path

For example: `amount_out` is `100`, `amount_in_max` is `500` and `path` is `[101, 102, 103, 104]`, indicating that the user wishes to use no more than `500` `101` assets to redeem `100` `104` assets.

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Swap/swap-Exchange1.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Swap/swap-Exchange2.jpg"  width="200" />



#### 6.3.2 swap_exact_tokens_for_tokens

The user calls exchangeAmm.swapExactAssetsForAssets(amount_in, amount_out_min, path) to perform the exchange.

Use the exact number of `amount_in` assets to attempt to exchange for another asset of no less than the `amount_out_min` amount.

- `amount_in`: the number of assets paid
- `amount_out_min`: the minimum number of target assets to be redeemed, when the calculated number of target assets is less than this value then no redemption will be made
- `path`: the redemption path, which is found by the front-end from the `PairKey` to find the optimal path

For example: `amount_in` is `10000`, `amount_out_min` is `500` and `path` is `[101, 102, 103, 104]`, which means the user wants to pay `10000` assets with asset Id `101` to redeem at least `500` assets with asset Id `104`. The redemption path is `101->102->103->104`.

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Swap/swap-Exchange1-1.jpg"  width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Swap/swap-Exchange2-1.jpg"  width="200" />



## 7 Farms(Farm)



### 7.1 Setting Farm Parameters

Open the [Polkadot apps](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.tico.dico.io#/explorer) page, go to the Governance-Council-Motions page, and do Propose motion-->Vote-->Close

#### 7.1.1 setStartBlock

(1) Council initiates a motion

The council member selects the "Propose motion" button, calls farm.setStartBlock and enters the blockNumber to initiate the motion to setStartBlock

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setStartBlock.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setStartBlock2.png"/>

(2) Members of council   vote

Members of council  select the "Vote" button to vote for or against the motion

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setStartBlock-vote1.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setStartBlock-vote2.png"/>

(3)The vote is closed and the motion is closed manually

The member of council  selects the "Close" button to close the motion.

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setStartBlock-close1.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setStartBlock-close2.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setStartBlock-close3.png"/>



```
-- A yes vote wins, setting the start block height succeeds
-- A negative vote wins, then setting the start block height fails
```



#### 7.1.2 setHalvingPeriod

(1) The council initiates a motion

The council member selects the "Propose motion" button, calls farm.setHalvingPeriod and enters the blockNumber to initiate a motion to setHalvingPeriod

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setHalvingPeriod1.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setHalvingPeriod2.png"/>

(2) Members of council   vote

Members of council  select the "Vote" button to vote for or against the motion

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setHalvingPeriod-vote1.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setHalvingPeriod-vote2.png"/>



(3)The vote is closed and the motion is closed manually

The member of council  selects the "Close" button to close the motion.

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setHalvingPeriod-close1.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setHalvingPeriod-close2.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setHalvingPeriod-close3.png"/>

```
-- If yes vote wins, set reward halving block height successful
-- a no vote wins, then setting the reward halving block height fails
```



#### 7.1.3 setDicoPerBlock

(1) council  initiates a motion

Members of the council select the "Propose motion" button and call the farm.setDicoPerBlock input to initiate a motion to setDicoPerBlock

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setDicoPerBlock.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setDicoPerBlock1.png"/>

(2) Members of council   vote

Members of council  select the "Vote" button to vote for or against the motion

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setDicoPerBlock-vote1.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setDicoPerBlock-vote2.png"/>

(3)The vote is closed and the motion is closed manually

The member of council  selects the "Close" button to close the motion.

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setDicoPerBlock-close1.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setDicoPerBlock-close2.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-setDicoPerBlock-close3.png"/>

```
-- A yes vote wins, then setting the number of dico awards per block succeeds
-- a no vote wins, then setting the number of dico awards per block fails
```



#### 7.1.4 updatePoolAllocPoint

```
pool_id: the Id of the mining pool
alloc_point: the mining weight of the pool.

Note: This method will update the mining data of all mining pools in bulk.
```

(1) Council initiates a motion

The council member selects the "Propose motion" button, calls farm.updatePoolAllocPoint, enters pool_id, alloc_point, and initiates a motion to updatePoolAllocPoint

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-updatePoolAllocPoint1.png"/>

(2) Members of council   vote

Members of council  select the "Vote" button to vote for or against the motion

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-updatePoolAllocPoint1-vote.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-updatePoolAllocPoint1-vote2.png"/>



(3)The vote is closed and the motion is closed manually

The member of council  selects the "Close" button to close the motion.

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-updatePoolAllocPoint-close1.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-updatePoolAllocPoint-close2.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-updatePoolAllocPoint-close3.png"/>

```
-- A yes vote results in a successful update of the pool weights, and this operation updates the weights of all pools in bulk
-- if the vote is against, the pool weight update fails
```



### 7.2 createPool

```
liquidity_id: Specifies the liquidity asset Id for this pool to mine, or in the case of single-coin mining, the asset Id for that single coin.
alloc_point: specifies the mining weight value for this pool.
The approximate implementation principle is as follows.
If the value of alloc_point is not 0, it will affect the revenue allocation of the mining pools that are mining. So you need to update the mining data of all the pools in bulk first. Then create a new pool, store it in the Pools structure and accumulate the alloc_point value into TotalAllocPoint.
```

(1) The council initiates a motion

The council member selects the "Propose motion" button and calls farm.createPool(liquidity_id, alloc_point) to initiate a motion to createPool

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-createPool.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-createPool2.png"/>

(2) Members of council   vote

Members of council  select the "Vote" button to vote for or against the motion

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-createPool-vote1.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-createPool-vote2.png"/>

(3)The vote is closed and the motion is closed manually

The member of council  selects the "Close" button to close the motion.

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-createPool-close1.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-createPool-close2.png"/>

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/pool/Council-createPool-close3.png"/>

```
-- If the vote is in favour, the pool is created and the user can participate in coin mining
-- If the vote is against, the pool will fail and the user can re-initiate the motion
```



### 7.3 depositLp

The user enters the SWAP-->Farms screen and selects any one to depositLp(pool_id, amount), entering the pool ID, amount and depositing the coins.

```
- `pool_id`: the Id of the mining pool
- `amount`: the amount of mining assets deposited

This method will update the pool information of `pool_id`, if the user's previous mining revenue is greater than 0, the revenue will be released to the user, and then the new `reward_debt` will be calculated.
```



<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm/farm-live.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm/farm-depositLp1.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm/farm-depositLp2.jpg" width="200" />

Coin deposit triggers the release of earnings:

```
1. Users who deposit coins for the first time will have no revenue but will have a liability value (liability value = the value of the last block height withdrawn from the pool to the reward value of the current block height)
2. If the user is not a first-time depositor, he/she will be paid directly for the previous deposit:
  --the weight of the last time the user withdrew a bonus block to the block height of the current coin deposit to calculate the bonus
3. If the user is not a first-time depositor, and the user is in the un-halfed and halfed stage, and the weight of the pool is modified first, the previous deposit will be paid directly:
  --Reward calculated by the weight of the block height from the last time the pool withdrew a bonus block to the time of the weight change (the sum of the two rewards between blocks that have not been halved and those that have been halved)
  --the new weight of the block height at the time of the weight change to the height of the currently deposited block to calculate the reward
4. If the user is not a first-time depositor, and has not withdrawn the reward after multiple halving, the user will be rewarded directly for the previous deposit:
  --The last time the user withdrew the reward block height to the current storage block height of the reward (including the sum of the multiple halving of each interval reward)
```



### 7.4 withdrawLp



```
pool_id: the Id of the mining pool
amount: the amount of redeemed mining assets, if amount is 0, only the proceeds will be withdrawn, and the principal will be left untouched.

This method will update the pool_id's mining pool information, and if the user's previous mining proceeds are greater than 0, the proceeds will be released to the user, and then the new reward_debt will be calculated.
```



(1)The user enters the SWAP-->Farms screen, selects any lp and clicks the "Harvest" button to withdraw the proceeds.

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm/farm-staked.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm/farm-harvest1.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm/farm-harvest2.jpg" width="200" />

(2)The user enters the SWAP-->Farms screen, selects any lp, clicks on the "Withdraw" button and enters the amount to withdraw the proceeds and the principal.



<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm/farm-staked.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm/farm-withdraw1.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm/farm-withdraw2.jpg" width="200" />

Award Calculation:

```
1. The user has deposited coins to collect the proceeds and the rewards issued are.
  --the weight of the last time the user withdrew the bonus block to the height of the current block withdrawal to calculate the reward
2. If the user has deposited coins and the weight of the pool has been modified between now and then, the reward will be calculated by adding up the two parts:
  --The weight of the block height from the last time the user withdrew the bonus block to the time the weight was changed to calculate the reward
  --the new weight from the block height at the time of the weight change to the current withdrawn block height to calculate the reward
3. If the user has already deposited coins, and there is currently a reward between blocks that have not been halved and blocks that have been halved (across halving cases), the reward will be calculated by modifying the weight of the pool and then receiving the reward, and the reward issued will be added up in two parts:
  -- the last time the user withdrew a bonus block from this pool to the weight of the block height at the time of the weight change (the sum of the two rewards between blocks that are not halved and those that are halved)
  --block height at the time of the weight change to the new weight of the current withdrawn block height to calculate the reward
4. If a user has deposited coins and is in multiple halved blocks without withdrawing them, the following rewards will be issued.
  --the last withdrawal reward block height of the user in this pool to the current withdrawal block height reward (including the sum of the rewards of each interval of multiple halving)
```

### 7.4 Stake

You can view the farms you have participated in by going to SWAP-->Farms and clicking on the "Staked" button.

```
Withdrawals of earnings and principal can be made regardless of whether farms has ended (weighted at 0), provided there are unclaimed earnings or principal.
```

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm/farm-live.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm/farm-staked.jpg" width="200" />

## 8 Pools(Farm_Extend)

### 8.1 createpool

The user goes to SWAP-->Pools, selects "Add pool", enters reward_currenry_id, take_currenry_id, RewardAmount(rewardPerBlock), startTime(startBlock), Duration(endBlock), and submits. startTime(startBlock), Duration(endBlock), and submit.

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm_extend/farm_extend-poolshome.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm_extend/farm_extend-addpool.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm_extend/farm_extend-addpool2.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm_extend/farm_extend-addpool3.jpg" width="200" />

### 8.2 deposit

The user goes to the SWAP-->Pools screen and selects any pool to deposit

```
The pool is not started or has been started, it can participate in the deposit;
```

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm_extend/farm_extend-depositlp1.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm_extend/farm_extend-depositlp2.jpg" width="200" />

### 8.3 withdrawlp

(1)The user enters the SWAP-->Pools-->Staked screen, selects a pool, and clicks the "Harvest" button to withdraw the proceeds.



<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm_extend/farm_extend-staked.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm_extend/farm_extend-harvest1.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm_extend/farm_extend-harvest2.jpg" width="200" />



(2) The user enters the SWAP->Pools->Staked interface, select any lp, click on the "Withdraw" button and enter the amount to withdraw the earnings and principal.

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm_extend/farm_extend-staked.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm_extend/farm_extend-withdraw1.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm_extend/farm_extend-withdraw2.jpg" width="200" />



### 8.4 Stake

Users can access the SWAP-->Pools-->Staked screen to see the pools they are involved in.

```
Withdrawals of earnings and principal can be made regardless of whether the pools have ended, provided there are unclaimed earnings or principal.
```

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm_extend/farm_extend-poolshome.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Farm_extend/farm_extend-staked.jpg" width="200" />



## 9 Lbp

### 9.1 createLbp

The user goes to the LBP->"➕" screen and can createLbp operations

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Lbp/Lbp-home.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Lbp/Lbp-CreateLbp.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Lbp/Lbp-CreateLbp1.jpg" width="200" />



### 9.2 Lbp_Manage

Users go to LBP --> "⚙" in the top right corner, select any LBP to enter the "Detail" page, view the LBP details

````
1. InProgress state can not exit operation;
2. Only Pending or Finished state can exit
 --Lbp in Pending state can be canceled, no mobility is provided
 --Lbp in Finished state can exit to withdraw the remaining liquid assets
````

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Lbp/Lbp-home.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Lbp/Lbp-Manage.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Lbp/Lbp-Manage-Detail.jpg" width="200" />



### 9.3 Lbp_Exchange

Users enter the LBP page and select any Lbp to enter the trading interface, where they can view the trading chart and perform Exchange operations

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Lbp/Lbp-home.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Lbp/Lbp-exchange.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Lbp/Lbp-exchange1.jpg" width="200" />



### 9.4 Lbp_Exit

The user enters the LBP --> "⚙" in the upper right corner, select any LBP to enter the "Detail" page, you can do the exit operation

````
1. InProgress state can not exit;
2. Only Pending or Finished state can exit
 --Pending state Lbp can cancel, no mobility is provided
 --Lbp in Finished state can exit to withdraw the remaining liquid assets
````

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Lbp/Lbp-Manage.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Lbp/Lbp-Manage-Detail.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/Lbp/Lbp-ExitLbp2.jpg" width="200" />





## 10 NFT

### 10.1 Claim Nft

```
Any account that participates in ico can make a claim if it has sufficient count.
```

Users enter ME-->NFT-->"Claim NFT" interface, select different types of nft for claim, claim successfully can be viewed in the "My NFT" interface to view the nft, you can manage the operation.

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-active3.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-claim.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-claim2.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-claim3.jpg" width="200" />



### 10.2 MyNft(manage)

Users can access ME-->NFT-->"My NFT" screen, which allows them to manage all nft under this account.

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-active3.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-home.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-claim3.jpg" width="200" />

#### 10.2.1 Active Nft

Users can enter ME-->NFT-->"My NFT" interface, select any inactive nft and set it to active, the setting is completed and the NFT avatar can be displayed on the ME home page.

```
NFTs in on_sale state cannot be active
```

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-home.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-active.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-active2.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-active3.jpg" width="200" />

#### 10.2.2 Inactive Nft

The user enters ME-->NFT-->"My NFT" interface, select any active nft and set active, the nft status changes to InActive after setting, you can set it again.

````
nft that does not have an active status cannot be inactive
````

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-Inactive1.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-Inactive2.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-Inactive4.jpg" width="200" />

#### 10.2.3 Send Nft(transfer)

The user enters ME-->NFT-->"My NFT" screen, selects the nft that is not in active or on_sale state, and sends the operation

```
nft in active or on_sale state cannot send
```

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-send0.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-send.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-send2.jpg" width="200" />

#### 10.2.4 Burn Nft

The user enters ME-->NFT-->"My NFT" screen, selects the nft that is not in active or on_sale status, and performs a burn operation to return the user's ico count.

When the operation is complete, the nft will be put into the queue for collection, and anyone who has participated in the ico to get enough counters can collect it.

```
nft in active or on_sale state cannot be burned
```

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-burn.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-burn2.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-burn3.jpg" width="200" />

#### 10.2.5 Sale Nft

Users enter ME-->NFT-->"My NFT" interface, select the nft that is not in active or on_sale state, to carry out the sale operation, the completion of the operation can be viewed in the "ON SALE" list in the NFT home page.

```
nft in active state, can not be sale operation
```

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-Inactive1.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-safe.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-safe1.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-home.jpg" width="200" />

#### 10.2.6 CancelSale Nft

The user enters ME-->NFT-->"My NFT" screen, select the nft in on_sale status, to cancel sale operation

````
If the nft does not exist in on_sale status, you cannot cancelSale operation
````

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-safe-cancel0.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-safe-cancel.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-safe-cancel2.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-safe-cancel3.jpg" width="200" />

### 10.3 Buy Nft

The user enters the ME->NFT interface, select any nft, click "buy" to purchase, the purchase is successful, then you can enter "My NFT" to view.

````
Any account with enough dico can buy directly, no need to participate in the ico to get the power
````

<img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-home.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-buy1.jpg" width="200" /><img src="https://cdn.jsdelivr.net/gh/DICO-TEAM/resources@master/dico_img/app/nft/nft-buy2.jpg" width="200" />
