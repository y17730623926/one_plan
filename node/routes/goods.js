var express = require('express');
var router = express.Router();
let mysql = require("../mysql");
let plan = require("../cbfile/plan");
/* GET users listing. */

// 物质计划   
    // 1.总计划
    //查寻数据
    router.get('/has_project', plan.has_project);
    // 所有
    router.get('/hasAll_project', plan.hasAll_project);
    //插入数据
    router.get('/insert_project', plan.insert_project);
    //修改数据
    router.get('/updata_project', plan.updata_project);
    //删除数据
    router.get('/delete_project', plan.delete_project);
    // 2.需用计划
    //查寻数据
    router.get('/has_xyproject', plan.has_xyproject);
    // 所有
    router.get('/hasAll_xyproject', plan.hasAll_xyproject);
    //插入数据
    router.get('/insert_xyproject', plan.insert_xyproject);
    //修改数据
    router.get('/updata_xyproject', plan.updata_xyproject);
    //删除数据
    router.get('/delete_xyproject', plan.delete_xyproject);
    // 3.合同配置
    //查寻数据
    router.get('/has_htpz', plan.has_htpz);
    // 所有
    router.get('/hasAll_htpz', plan.hasAll_htpz);
    //插入数据
    router.get('/insert_htpz', plan.insert_htpz);
    //修改数据
    router.get('/updata_htpz', plan.updata_htpz);
    //删除数据
    router.get('/delete_htpz', plan.delete_htpz);
    // 4.材料入场
    //查寻数据
    router.get('/has_admission', plan.has_admission);
    // 所有
    router.get('/hasAll_admission', plan.hasAll_admission);
    //插入数据
    router.get('/insert_admission', plan.insert_admission);
    //修改数据
    router.get('/updata_admission', plan.updata_admission);
    //删除数据
    router.get('/delete_admission', plan.delete_admission);
    // 5.材料出库
    //查寻数据
    router.get('/has_delivery', plan.has_delivery);
    // 所有
    router.get('/hasAll_delivery', plan.hasAll_delivery);
    //插入数据
    router.get('/insert_delivery', plan.insert_delivery);
    //修改数据
    router.get('/updata_delivery', plan.updata_delivery);
    //删除数据
    router.get('/delete_delivery', plan.delete_delivery);
    // 6.材料盘点
    //查寻数据
    router.get('/has_content', plan.has_content);
    // 所有
    router.get('/hasAll_content', plan.hasAll_content);
    //插入数据
    router.get('/insert_content', plan.insert_content);
    //修改数据
    router.get('/updata_content', plan.updata_content);
    //删除数据
    router.get('/delete_content', plan.delete_content);
    // 7.供应商配置
    //查寻数据
    router.get('/has_vendor', plan.has_vendor);
    // 所有
    router.get('/hasAll_vendor', plan.hasAll_vendor);
    //插入数据
    router.get('/insert_vendor', plan.insert_vendor);
    //修改数据
    router.get('/updata_vendor', plan.updata_vendor);
    //删除数据
    router.get('/delete_vendor', plan.delete_vendor);
    // 8.基础物资库
    //查寻数据
    router.get('/has_basicmaterials', plan.has_basicmaterials);
    // 所有
    router.get('/hasAll_basicmaterials', plan.hasAll_basicmaterials);
    //插入数据
    router.get('/insert_basicmaterials', plan.insert_basicmaterials);
    //修改数据
    router.get('/updata_basicmaterials', plan.updata_basicmaterials);
    //删除数据
    router.get('/delete_basicmaterials', plan.delete_basicmaterials);
    // 9.仓库管理
    //查寻数据
    router.get('/has_warehouse', plan.has_warehouse);
    // 所有
    router.get('/hasAll_warehouse', plan.hasAll_warehouse);
    //插入数据
    router.get('/insert_warehouse', plan.insert_warehouse);
    //修改数据
    router.get('/updata_warehouse', plan.updata_warehouse);
    //删除数据
    router.get('/delete_warehouse', plan.delete_warehouse);
    // 10.合同配置
    //查寻数据
    router.get('/has_contract', plan.has_contract);
    // 所有
    router.get('/hasAll_contract', plan.hasAll_contract);
    //插入数据
    router.get('/insert_contract', plan.insert_contract);
    //修改数据
    router.get('/updata_contract', plan.updata_contract);
    //删除数据
    router.get('/delete_contract', plan.delete_contract);


module.exports = router;
