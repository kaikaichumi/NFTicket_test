# NFTicket_test
# 專案安裝步驟
----
## 前置作業
### 安裝及創建帳號
    安裝VS code、 Git、 Nodejs、 MetaMask
    創建帳號 : PINATA、 ALCHEMY、 POLYSCAN、 GITHUB

### 下載專案
    在Terminal執行
    git clone https://github.com/kaikaichumi/NFTicket_test.git
    開啟VS Code 在Terminal執行
    npm install
    
即可看到本地端網頁
### 智能合約
   到PINATA上傳圖片，並創建Metadata.json檔貼上這串Opensea的格式
   <br>
    ```
    {
      "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
      "external_url": "https://openseacreatures.io/3", 
      "image": "你的IPFS圖片網址", 
      "name": "Dave Starbelly",
      "attributes": [ ... ]
    }
    ```
    <br>
   將Metadata.json檔上傳至PINATA
   在Terminal執行
   <br>
    ```
    npm install -g @remix-project/remixd
    remixd -s <你的專案資料夾絕對路徑> --remix-ide https://remix.ethereum.org
    ```
    
    <br>
在Remix IDE點擊
<br>

![image](https://github.com/kaikaichumi/NFTicket_test/blob/main/result_pic/Remix_localhost.png)
<br>

編譯Boneboss.sol並選擇MetaMask部署環境(MetaMask錢包記得改成Mumbai測試網)，記得deploy變數要打"boneboss" "你的錢包地址"
<br>

![image](https://github.com/kaikaichumi/NFTicket_test/blob/main/result_pic/remix_deploy.png)
<br>

在Remix對合約按右鍵選擇FLATTENER，使用FLATTENER驗證合約，並依照POLYSCAN上指示操作驗證。
<br>

![image](https://github.com/kaikaichumi/NFTicket_test/blob/main/result_pic/polygon_verify.png)
<br>

![image](https://github.com/kaikaichumi/NFTicket_test/blob/main/result_pic/save_flatten.png)
<br>

複製所有代碼
<br>

![image](https://github.com/kaikaichumi/NFTicket_test/blob/main/result_pic/copy_verify.png)
<br>

貼上代碼並在第一行加上
```
// SPDX-License-Identifier: MIT
```
之後點擊驗證，即可完成驗證合約。

驗證完後複製abi.json檔到專案資料夾 /src/utils/abi.json
<br>

![image](https://github.com/kaikaichumi/NFTicket_test/blob/main/result_pic/abi_copy.png)
<br>

到ALCHEMY創建Mumbai測試網的WEB3 API，並複製API KEY到/src/utils/interact.js，複製合約地址到 /src/utils/interact.js 更改下圖的對應變數:
<br>

![image](https://github.com/kaikaichumi/NFTicket_test/blob/main/result_pic/alchemy_key.png)
<br>

點擊view key並複製HTTPS的API網址。
<br>

更改合約地址
<br>

![image](https://github.com/kaikaichumi/NFTicket_test/blob/main/result_pic/contract_change.png)
<br>

改Donate位址
<br>

![image](https://github.com/kaikaichumi/NFTicket_test/blob/main/result_pic/changedonate.png)
<br>

在PLOYSCAN你的合約寫入Token URI(記得點擊紅色的連結Owner錢包按鈕)，如下圖所示:
![image](https://github.com/kaikaichumi/NFTicket_test/blob/main/result_pic/setTokenURI.png)
<br>



新增
```
    "scripts": {
        "start": "cross-env GENERATE_SOURCEMAP=false react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    },
```
執行
```
npm run deploy
npm start
```

完成專案部署
<br>

![image](https://user-images.githubusercontent.com/126358442/228725675-ffd91684-48b3-487f-9b03-22f3273a5719.png)
<a href="#top">Back to top</a>
