let mysql = require("../mysql");    //封装的mysql

class Plan {
    // 1.总计划
    has_project(req, res, next) {
        let data = req.query;
        let sqladd = "select * from project where id=?";
        let sqlvalue = [`${data.id}`];
        mysql.query(sqladd, sqlvalue, result => {
            if (result.length === 0) {
                res.send({      //查询成功
                    msg: "没有数据！",
                    code: 1
                });
            } else {
                res.send({      //查询成功
                    msg: "查询成功！",
                    code: 0,
                    data: result
                });
            }

        })
    }
    hasAll_project(req, res, next) {
        let data = req.query;
        if (data.planname) {
            let sqladd = "select * from project where planname like ?";
            let sqlvalue = [`%${data.planname}%`];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({      //查询成功
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({      //查询成功
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        } else {
            let sqladd = "select * from project";
            let sqlvalue = [];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({      //查询成功
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({      //查询成功
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        }

    }
    insert_project(req, res, next) {
        let data = req.query;
        if (!data.prjid) {
            res.send({
                msg: "项目id不能为空！",
                code: -1,
            });
        } else {
            mysql.query("select * from project where prjid=?", [data.prjid], result => {
                if (result.length === 0) {
                    let sqladd = "insert into project(`prjid`,`planname`,`cmtld`,`leaderNext`,`cdate`,`mname`,`userloc`,`mnum`) values(?,?,?,?,?,?,?,?)";
                    let sqlvalue = [data.prjid, data.planname, data.cmtld, data.leaderNext, data.cdate, data.mname, data.userloc, data.mnum];
                    mysql.query(sqladd, sqlvalue, result => {
                        res.send({
                            msg: "添加成功！",
                            code: 0,
                        });
                    })
                } else {
                    res.send({
                        msg: "项目id已存在！",
                        code: 1,
                    });
                }
            })
        }
    }
    updata_project(req, res, next) {
        let data = req.query;
        if (!data.prjid) {
            res.send({
                msg: "项目id不能为空！",
                code: -1,
            });
        } else {
            let sqladd = "update project set planname=?,cmtld=?,leaderNext=?,cdate=?,mname=?,userloc=?,mnum=? where prjid=?";
            let sqlvalue = [data.planname, data.cmtld, data.leaderNext, data.cdate, data.mname, data.userloc, data.mnum, data.prjid];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "修改成功！",
                    code: 0,
                });
            })
        }

    }
    delete_project(req, res, next) {
        let data = req.query;
        if (data.prjid) {
            let sqladd = "delete from project where prjid=?";
            let sqlvalue = [data.prjid];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "删除成功！",
                    code: 0,
                });
            })
        } else {
            res.send({
                msg: "删除失败！",
                code: 1,
            });
        }

    }
    // 2.需用计划
    has_xyproject(req, res, next) {
        let data = req.query;
        let sqladd = "select * from xyproject where id=?";
        let sqlvalue = [`${data.id}`];
        mysql.query(sqladd, sqlvalue, result => {
            if (result.length === 0) {
                res.send({
                    msg: "没有数据！",
                    code: 1
                });
            } else {
                res.send({
                    msg: "查询成功！",
                    code: 0,
                    data: result
                });
            }

        })
    }
    hasAll_xyproject(req, res, next) {
        let data = req.query;
        if (data.cmt_man) {
            let sqladd = "select * from xyproject where cmt_man like ?";
            let sqlvalue = [`%${data.cmt_man}%`];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        } else {
            let sqladd = "select * from xyproject";
            let sqlvalue = [];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        }
    }
    insert_xyproject(req, res, next) {
        let data = req.query;
        if (!data.prjid) {
            res.send({
                msg: "项目id不能为空！",
                code: -1,
            });
        } else {
            mysql.query("select * from xyproject where prjid=?", [data.prjid], result => {
                if (result.length === 0) {
                    let sqladd = "insert into xyproject(`prjid`,`mr_name`,`cmt_man`,`cmt_date`,`come_date`,`userLoc`,`mnum`,`mprice`,`ifover`,`prov_state`) values(?,?,?,?,?,?,?,?,?,?)";
                    let sqlvalue = [data.prjid, data.mr_name, data.cmt_man, data.cmt_date, data.come_date, data.userLoc, data.mnum, data.mprice, data.ifover, data.prov_state];
                    mysql.query(sqladd, sqlvalue, result => {
                        res.send({
                            msg: "添加成功！",
                            code: 0,
                        });
                    })
                } else {
                    res.send({
                        msg: "项目id已存在！",
                        code: 1,
                    });
                }
            })
        }
    }
    updata_xyproject(req, res, next) {
        let data = req.query;
        if (!data.prjid) {
            res.send({
                msg: "项目id不能为空！",
                code: -1,
            });
        } else {
            let sqladd = "update xyproject set mr_name=?,cmt_man=?,cmt_date=?,come_date=?,userLoc=?,mnum=?,mprice=?,ifover=?,prov_state=? where prjid=?";
            let sqlvalue = [data.mr_name, data.cmt_man, data.cmt_date, data.come_date, data.userLoc, data.mnum, data.mprice, data.ifover, data.prov_state, data.prjid];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "修改成功！",
                    code: 0,
                });
            })
        }

    }
    delete_xyproject(req, res, next) {
        let data = req.query;
        if (data.prjid) {
            let sqladd = "delete from xyproject where prjid=?";
            let sqlvalue = [data.prjid];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "删除成功！",
                    code: 0,
                });
            })
        } else {
            res.send({
                msg: "删除失败！",
                code: 1,
            });
        }

    }
    // 3.合同配置
    has_htpz(req, res, next) {
        let data = req.query;
        let sqladd = "select * from pact where id=?";
        let sqlvalue = [`${data.id}`];
        mysql.query(sqladd, sqlvalue, result => {
            if (result.length === 0) {
                res.send({
                    msg: "没有数据！",
                    code: 1
                });
            } else {
                res.send({
                    msg: "查询成功！",
                    code: 0,
                    data: result
                });
            }

        })
    }
    hasAll_htpz(req, res, next) {
        let data = req.query;
        if (data.ct_name) {
            let sqladd = "select * from pact where ct_name like ?";
            let sqlvalue = [`%${data.ct_name}%`];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        } else {
            let sqladd = "select * from pact";
            let sqlvalue = [];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        }
    }
    insert_htpz(req, res, next) {
        let data = req.query;
        if (!data.prj_id) {
            res.send({
                msg: "项目id不能为空！",
                code: -1,
            });
        } else {
            mysql.query("select * from pact where prj_id=?", [data.prjid], result => {
                if (result.length === 0) {
                    let sqladd = "insert into pact(`user_id`,`ct_name`,`ct_type`,`pr_id`,`ct_sum`,`pay_mode`,`ct_state`,`ct_date`,`prj_id`,`pre_pay`,`deposit`,`ctext_man`,`leader_next`,`m_id`,`ctd_num`,`ctd_money`,`ctd_state`) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
                    let sqlvalue = [data.user_id, data.ct_name, data.ct_type, data.pr_id, data.ct_sum, data.pay_mode, data.ct_state, data.ct_date, data.prj_id, data.pre_pay, data.deposit, data.ctext_man, data.leader_next, data.m_id, data.ctd_num, data.ctd_money, data.ctd_state];
                    mysql.query(sqladd, sqlvalue, result => {
                        res.send({
                            msg: "添加成功！",
                            code: 0,
                        });
                    })
                } else {
                    res.send({
                        msg: "项目id已存在！",
                        code: 1,
                    });
                }
            })
        }
    }
    updata_htpz(req, res, next) {
        let data = req.query;
        if (!data.prj_id) {
            res.send({
                msg: "项目id不能为空！",
                code: -1,
            });
        } else {
            let sqladd = "update pact set user_id=?,ct_name=?,ct_type=?,pr_id=?,ct_sum=?,pay_mode=?,ct_state=?,ct_date=?,pre_pay=?,deposit=?,ctext_man=?,leader_next=?,m_id=?,ctd_num=?,ctd_money=?,ctd_state=? where prj_id=?";
            let sqlvalue = [data.user_id, data.ct_name, data.ct_type, data.pr_id, data.ct_sum, data.pay_mode, data.ct_state, data.ct_date, data.pre_pay, data.deposit, data.ctext_man, data.leader_next, data.m_id, data.ctd_num, data.ctd_money, data.ctd_state, data.prj_id];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "修改成功！",
                    code: 0,
                });
            })
        }

    }
    delete_htpz(req, res, next) {
        let data = req.query;
        if (data.prj_id) {
            let sqladd = "delete from pact where prj_id=?";
            let sqlvalue = [data.prj_id];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "删除成功！",
                    code: 0,
                });
            })
        } else {
            res.send({
                msg: "删除失败！",
                code: 1,
            });
        }

    }
    // 4.材料入场
    has_admission(req, res, next) {
        let data = req.query;
        let sqladd = "select * from admission where id=?";
        let sqlvalue = [`${data.id}`];
        mysql.query(sqladd, sqlvalue, result => {
            if (result.length === 0) {
                res.send({
                    msg: "没有数据！",
                    code: 1
                });
            } else {
                res.send({
                    msg: "查询成功！",
                    code: 0,
                    data: result
                });
            }

        })
    }
    hasAll_admission(req, res, next) {
        let data = req.query;
        if (data.mmid) {
            let sqladd = "select * from admission where mmid like ?";
            let sqlvalue = [`%${data.mmid}%`];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        } else {
            let sqladd = "select * from admission";
            let sqlvalue = [];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        }
    }
    insert_admission(req, res, next) {
        let data = req.query;
        if (!data.prold) {
            res.send({
                msg: "项目id不能为空！",
                code: -1,
            });
        } else {
            mysql.query("select * from admission where prold=?", [data.prold], result => {
                if (result.length === 0) {
                    let sqladd = "insert into admission(`vno`,`verMan`,`prold`,`mConld`,`aprlistld`,`ifacpt`,`mmid`,`mnum`,`ifsave`,`repold`,`rmanver`,`filepathsmlist`) values(?,?,?,?,?,?,?,?,?,?,?,?)";
                    let sqlvalue = [data.vno, data.verMan, data.prold, data.mConld, data.aprlistld, data.ifacpt, data.mmid, data.mnum, data.ifsave, data.repold, data.rmanver, data.ctexfilepathsmlistt_man];
                    mysql.query(sqladd, sqlvalue, result => {
                        res.send({
                            msg: "添加成功！",
                            code: 0,
                        });
                    })
                } else {
                    res.send({
                        msg: "项目id已存在！",
                        code: 1,
                    });
                }
            })
        }
    }
    updata_admission(req, res, next) {
        let data = req.query;
        if (!data.prold) {
            res.send({
                msg: "项目id不能为空！",
                code: -1,
            });
        } else {
            // let sqladd = "insert into admission(`vno`,`verMan`,`prold`,`mConld`,`aprlistld`,`ifacpt`,`mmid`,`mnum`,`ifsave`,`repold`,`rmanver`,`filepathsmlist`) values(?,?,?,?,?,?,?,?,?,?,?,?)";
            // let sqlvalue = [data.vno, data.verMan, data.prold, data.mConld, data.aprlistld, data.ifacpt, data.mmid, data.mnum, data.ifsave, data.repold, data.rmanver, data.ctexfilepathsmlistt_man];
            let sqladd = "update admission set vno=?,verMan=?,mConld=?,aprlistld=?,ifacpt=?,mmid=?,mnum=?,ifsave=?,repold=?,rmanver=?,filepathsmlist=? where prold=?";
            let sqlvalue = [data.vno, data.verMan, data.mConld, data.aprlistld, data.ifacpt, data.mmid, data.mnum, data.ifsave, data.repold, data.rmanver, data.filepathsmlist, data.prold];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "修改成功！",
                    code: 0,
                });
            })
        }

    }
    delete_admission(req, res, next) {
        let data = req.query;
        if (data.prold) {
            let sqladd = "delete from admission where prold=?";
            let sqlvalue = [data.prold];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "删除成功！",
                    code: 0,
                });
            })
        } else {
            res.send({
                msg: "删除失败！",
                code: 1,
            });
        }

    }
    // 5.材料出库
    has_delivery(req, res, next) {
        let data = req.query;
        let sqladd = "select * from delivery where id=?";
        let sqlvalue = [`${data.id}`];
        mysql.query(sqladd, sqlvalue, result => {
            if (result.length === 0) {
                res.send({
                    msg: "没有数据！",
                    code: 1
                });
            } else {
                res.send({
                    msg: "查询成功！",
                    code: 0,
                    data: result
                });
            }

        })
    }
    hasAll_delivery(req, res, next) {
        let data = req.query;
        if (data.teamid) {
            let sqladd = "select * from delivery where teamid like ?";
            let sqlvalue = [`%${data.teamid}%`];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        } else {
            let sqladd = "select * from delivery";
            let sqlvalue = [];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        }
    }
    insert_delivery(req, res, next) {
        let data = req.query;
        if (!data.inputid) {
            res.send({
                msg: "项目id不能为空！",
                code: -1,
            });
        } else {
            mysql.query("select * from delivery where inputid=?", [data.prold], result => {
                if (result.length === 0) {
                    let sqladd = "insert into delivery(`inputid`,`teamid`,`iptDate`,`filepaths`) values(?,?,?,?)";
                    let sqlvalue = [data.inputid, data.teamid,data.iptDate, data.filepaths];
                    mysql.query(sqladd, sqlvalue, result => {
                        res.send({
                            msg: "添加成功！",
                            code: 0,
                        });
                    })
                } else {
                    res.send({
                        msg: "项目id已存在！",
                        code: 1,
                    });
                }
            })
        }
    }
    updata_delivery(req, res, next) {
        let data = req.query;
        if (!data.inputid) {
            res.send({
                msg: "项目id不能为空！",
                code: -1,
            });
        } else {
            // let sqladd = "insert into delivery(`vno`,`verMan`,`prold`,`mConld`,`aprlistld`,`ifacpt`,`mmid`,`mnum`,`ifsave`,`repold`,`rmanver`,`filepathsmlist`) values(?,?,?,?,?,?,?,?,?,?,?,?)";
            // let sqlvalue = [data.vno, data.verMan, data.prold, data.mConld, data.aprlistld, data.ifacpt, data.mmid, data.mnum, data.ifsave, data.repold, data.rmanver, data.ctexfilepathsmlistt_man];
            let sqladd = "update delivery set teamid=?,iptDate=?,filepaths=? where inputid=?";
            let sqlvalue = [data.teamid, data.iptDate, data.filepaths, data.inputid];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "修改成功！",
                    code: 0,
                });
            })
        }

    }
    delete_delivery(req, res, next) {
        let data = req.query;
        if (data.inputid) {
            let sqladd = "delete from delivery where inputid=?";
            let sqlvalue = [data.inputid];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "删除成功！",
                    code: 0,
                });
            })
        } else {
            res.send({
                msg: "删除失败！",
                code: 1,
            });
        }

    }
    // 6.材料盘点
    has_content(req, res, next) {
        let data = req.query;
        let sqladd = "select * from content where id=?";
        let sqlvalue = [`${data.id}`];
        mysql.query(sqladd, sqlvalue, result => {
            if (result.length === 0) {
                res.send({
                    msg: "没有数据！",
                    code: 1
                });
            } else {
                res.send({
                    msg: "查询成功！",
                    code: 0,
                    data: result
                });
            }

        })
    }
    hasAll_content(req, res, next) {
        let data = req.query;
        if (data.mmidName) {
            let sqladd = "select * from content where mmidName like ?";
            let sqlvalue = [`%${data.mmidName}%`];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        } else {
            let sqladd = "select * from content";
            let sqlvalue = [];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        }
    }
    insert_content(req, res, next) {
        let data = req.query;
        if (!data.mmidName) {
            res.send({
                msg: "项目id不能为空！",
                code: -1,
            });
        } else {
            mysql.query("select * from content where mmidName=?", [data.prold], result => {
                if (result.length === 0) {
                    let sqladd = "insert into content(`mmidName`,`mnum`) values(?,?)";
                    let sqlvalue = [data.mmidName, data.mnum];
                    mysql.query(sqladd, sqlvalue, result => {
                        res.send({
                            msg: "添加成功！",
                            code: 0,
                        });
                    })
                } else {
                    res.send({
                        msg: "项目id已存在！",
                        code: 1,
                    });
                }
            })
        }
    }
    updata_content(req, res, next) {
        let data = req.query;
        if (!data.mmidName) {
            res.send({
                msg: "项目id不能为空！",
                code: -1,
            });
        } else {
            // let sqladd = "insert into content(`vno`,`verMan`,`prold`,`mConld`,`aprlistld`,`ifacpt`,`mmid`,`mnum`,`ifsave`,`repold`,`rmanver`,`filepathsmlist`) values(?,?,?,?,?,?,?,?,?,?,?,?)";
            // let sqlvalue = [data.vno, data.verMan, data.prold, data.mConld, data.aprlistld, data.ifacpt, data.mmid, data.mnum, data.ifsave, data.repold, data.rmanver, data.ctexfilepathsmlistt_man];
            let sqladd = "update content set mnum=? where mmidName=?";
            let sqlvalue = [data.mnum, data.mmidName];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "修改成功！",
                    code: 0,
                });
            })
        }

    }
    delete_content(req, res, next) {
        let data = req.query;
        if (data.mmidName) {
            let sqladd = "delete from content where mmidName=?";
            let sqlvalue = [data.mmidName];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "删除成功！",
                    code: 0,
                });
            })
        } else {
            res.send({
                msg: "删除失败！",
                code: 1,
            });
        }

    }
    // 7.供应商配置
    has_vendor(req, res, next) {
        let data = req.query;
        let sqladd = "select * from vendor where id=?";
        let sqlvalue = [`${data.id}`];
        mysql.query(sqladd, sqlvalue, result => {
            if (result.length === 0) {
                res.send({
                    msg: "没有数据！",
                    code: 1
                });
            } else {
                res.send({
                    msg: "查询成功！",
                    code: 0,
                    data: result
                });
            }

        })
    }
    hasAll_vendor(req, res, next) {
        let data = req.query;
        if (data.pname) {
            let sqladd = "select * from vendor where pname like ?";
            let sqlvalue = [`%${data.pname}%`];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        } else {
            let sqladd = "select * from vendor";
            let sqlvalue = [];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        }
    }
    insert_vendor(req, res, next) {
        let data = req.query;
        if (!data.personid) {
            res.send({
                msg: "项目id不能为空！",
                code: -1,
            });
        } else {
            mysql.query("select * from vendor where personid=?", [data.pname], result => {
                if (result.length === 0) {
                    let sqladd = "insert into vendor(`pname`,`parea`,`pcotype`,`ptype`,`pprof`,`paddr`,`leader` ,`personid`) values(?,?,?,?,?,?,?,?)";
                    let sqlvalue = [data.pname, data.parea, data.pcotype, data.ptype, data.pprof, data.paddr, data.leader, data.personid];
                    mysql.query(sqladd, sqlvalue, result => {
                        res.send({
                            msg: "添加成功！",
                            code: 0,
                        });
                    })
                } else {
                    res.send({
                        msg: "项目id已存在！",
                        code: 1,
                    });
                }
            })
        }
    }
    updata_vendor(req, res, next) {
        let data = req.query;
        if (!data.personid) {
            res.send({
                msg: "项目id不能为空！",
                code: -1,
            });
        } else {
            let sqladd = "update vendor set pname=?,parea=?,pcotype=? where personid=?";
            let sqlvalue = [data.pname, data.parea,data.pcotype, data.personid];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "修改成功！",
                    code: 0,
                });
            })
        }

    }
    delete_vendor(req, res, next) {
        let data = req.query;
        if (data.personid) {
            let sqladd = "delete from vendor where personid=?";
            let sqlvalue = [data.personid];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "删除成功！",
                    code: 0,
                });
            })
        } else {
            res.send({
                msg: "删除失败！",
                code: 1,
            });
        }

    }
    // 8.基础物资库
    has_basicmaterials(req, res, next) {
        let data = req.query;
        let sqladd = "select * from basicmaterials where id=?";
        let sqlvalue = [`${data.id}`];
        mysql.query(sqladd, sqlvalue, result => {
            if (result.length === 0) {
                res.send({
                    msg: "没有数据！",
                    code: 1
                });
            } else {
                res.send({
                    msg: "查询成功！",
                    code: 0,
                    data: result
                });
            }

        })
    }
    hasAll_basicmaterials(req, res, next) {
        let data = req.query;
        if (data.mcode) {
            let sqladd = "select * from basicmaterials where mcode like ?";
            let sqlvalue = [`%${data.mcode}%`];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        } else {
            let sqladd = "select * from basicmaterials";
            let sqlvalue = [];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        }
    }
    insert_basicmaterials(req, res, next) {
        let data = req.query;
        if (!data.mcode) {
            res.send({
                msg: "项目id不能为空！",
                code: -1,
            });
        } else {
            mysql.query("select * from basicmaterials where mcode=?", [data.pname], result => {
                if (result.length === 0) {
                    let sqladd = "insert into basicmaterials(`mcode`,`mname`,`mtype`,`munit`,`filepaths`,`remark`) values(?,?,?,?,?,?)";
                    let sqlvalue = [data.mcode, data.mname, data.mtype, data.munit, data.filepaths, data.remark];
                    mysql.query(sqladd, sqlvalue, result => {
                        res.send({
                            msg: "添加成功！",
                            code: 0,
                        });
                    })
                } else {
                    res.send({
                        msg: "项目id已存在！",
                        code: 1,
                    });
                }
            })
        }
    }
    updata_basicmaterials(req, res, next) {
        let data = req.query;
        if (!data.mcode) {
            res.send({
                msg: "项目id不能为空！",
                code: -1,
            });
        } else {
            let sqladd = "update basicmaterials set mname=?,mtype=?,munit=?,filepaths=?,remark=?  where mcode=?";
            let sqlvalue = [data.mname, data.mtype,data.munit,data.filepaths,data.remark, data.mcode];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "修改成功！",
                    code: 0,
                });
            })
        }

    }
    delete_basicmaterials(req, res, next) {
        let data = req.query;
        if (data.mcode) {
            let sqladd = "delete from basicmaterials where mcode=?";
            let sqlvalue = [data.mcode];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "删除成功！",
                    code: 0,
                });
            })
        } else {
            res.send({
                msg: "删除失败！",
                code: 1,
            });
        }

    }
    // 9.仓库管理
    has_warehouse(req, res, next) {
        let data = req.query;
        let sqladd = "select * from warehouse where id=?";
        let sqlvalue = [`${data.id}`];
        mysql.query(sqladd, sqlvalue, result => {
            if (result.length === 0) {
                res.send({
                    msg: "没有数据！",
                    code: 1
                });
            } else {
                res.send({
                    msg: "查询成功！",
                    code: 0,
                    data: result
                });
            }

        })
    }
    hasAll_warehouse(req, res, next) {
        let data = req.query;
        if (data.storeMan) {
            let sqladd = "select * from warehouse where storeMan like ?";
            let sqlvalue = [`%${data.storeMan}%`];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        } else {
            let sqladd = "select * from warehouse";
            let sqlvalue = [];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        }
    }
    insert_warehouse(req, res, next) {
        let data = req.query;
        if (!data.storeName) {
            res.send({
                msg: "项目storeName不能为空！",
                code: -1,
            });
        } else {
            mysql.query("select * from warehouse where storeName=?", [data.pname], result => {
                if (result.length === 0) {
                    let sqladd = "insert into warehouse(`storeMan`,`storeName`,`storeLoc`,`remark`) values(?,?,?,?)";
                    let sqlvalue = [data.storeMan, data.storeName, data.storeLoc, data.remark];
                    mysql.query(sqladd, sqlvalue, result => {
                        res.send({
                            msg: "添加成功！",
                            code: 0,
                        });
                    })
                } else {
                    res.send({
                        msg: "项目storeName已存在！",
                        code: 1,
                    });
                }
            })
        }
    }
    updata_warehouse(req, res, next) {
        let data = req.query;
        if (!data.storeName) {
            res.send({
                msg: "项目storeName不能为空！",
                code: -1,
            });
        } else {
            let sqladd = "update warehouse set storeMan=?,storeLoc=?,remark=?  where storeName=?";
            let sqlvalue = [data.storeMan, data.storeLoc,data.remark, data.storeName];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "修改成功！",
                    code: 0,
                });
            })
        }

    }
    delete_warehouse(req, res, next) {
        let data = req.query;
        if (data.storeName) {
            let sqladd = "delete from warehouse where storeName=?";
            let sqlvalue = [data.storeName];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "删除成功！",
                    code: 0,
                });
            })
        } else {
            res.send({
                msg: "删除失败！",
                code: 1,
            });
        }

    }
    // 10.仓库管理材料设置-合同配置
    has_contract(req, res, next) {
        let data = req.query;
        let sqladd = "select * from contract where id=?";
        let sqlvalue = [`${data.id}`];
        mysql.query(sqladd, sqlvalue, result => {
            if (result.length === 0) {
                res.send({
                    msg: "没有数据！",
                    code: 1
                });
            } else {
                res.send({
                    msg: "查询成功！",
                    code: 0,
                    data: result
                });
            }

        })
    }
    hasAll_contract(req, res, next) {
        let data = req.query;
        if (data.id) {
            let sqladd = "select * from contract where id like ?";
            let sqlvalue = [`%${data.id}%`];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        } else {
            let sqladd = "select * from contract";
            let sqlvalue = [];
            mysql.query(sqladd, sqlvalue, result => {
                if (result.length === 0) {
                    res.send({
                        msg: "没有数据！",
                        code: 1
                    });
                } else {
                    res.send({
                        msg: "查询成功！",
                        code: 0,
                        data: result
                    });
                }
            })
        }
    }
    insert_contract(req, res, next) {
        let data = req.query;
        if (!data.repcloc) {
            res.send({
                msg: "项目repcloc不能为空！",
                code: -1,
            });
        } else {
            mysql.query("select * from contract where repcloc=?", [data.pname], result => {
                if (result.length === 0) {
                    let sqladd = "insert into contract(`repcloc`,`repclocName`,`repclocMan`) values(?,?,?)";
                    let sqlvalue = [data.repcloc, data.repclocName, data.repclocMan];
                    mysql.query(sqladd, sqlvalue, result => {
                        res.send({
                            msg: "添加成功！",
                            code: 0,
                        });
                    })
                } else {
                    res.send({
                        msg: "项目storeName已存在！",
                        code: 1,
                    });
                }
            })
        }
    }
    updata_contract(req, res, next) {
        let data = req.query;
        if (!data.repcloc) {
            res.send({
                msg: "项目repcloc不能为空！",
                code: -1,
            });
        } else {
            let sqladd = "update contract set repclocName=?,repclocMan=?  where repcloc=?";
            let sqlvalue = [data.repclocName, data.repclocMan, data.repcloc];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "修改成功！",
                    code: 0,
                });
            })
        }

    }
    delete_contract(req, res, next) {
        let data = req.query;
        if (data.repcloc) {
            let sqladd = "delete from contract where repcloc=?";
            let sqlvalue = [data.repcloc];
            mysql.query(sqladd, sqlvalue, result => {
                res.send({
                    msg: "删除成功！",
                    code: 0,
                });
            })
        } else {
            res.send({
                msg: "删除失败！",
                code: 1,
            });
        }

    }

}
module.exports = new Plan();

