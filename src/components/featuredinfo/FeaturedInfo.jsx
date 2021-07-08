import React from 'react';
import './featuredinfo.css';
import {ArrowDownward,ArrowUpward} from '@material-ui/icons';

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
             <span className="featuredTitle">Revanue</span>
             <div className="featuredMoneyContainer">
                 <span className="featuredMoney">$4,000</span>
                 <span className="featuredRate">
                     -11.4 <ArrowDownward className="featuredIcon negative" />
                 </span>
             </div>
             <span className="featuredSub">Compared to last Month</span>
            </div>

            <div className="featuredItem">
             <span className="featuredTitle">Revanue</span>
             <div className="featuredMoneyContainer">
                 <span className="featuredMoney">$4,000</span>
                 <span className="featuredRate">
                     -11.4 <ArrowDownward className="featuredIcon negative"/>
                 </span>
             </div>
             <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
             <span className="featuredTitle">Sales</span>
             <div className="featuredMoneyContainer">
                 <span className="featuredMoney">$4,000</span>
                 <span className="featuredRate">
                     -11.4 <ArrowDownward className="featuredIcon negative" />
                 </span>
             </div>
             <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
             <span className="featuredTitle">Cost</span>
             <div className="featuredMoneyContainer">
                 <span className="featuredMoney">$65,000</span>
                 <span className="featuredRate">
                     +11.4 <ArrowUpward className="featuredIcon "/>
                 </span>
             </div>
             <span className="featuredSub">Compared to last Month</span>
            </div>
        </div>
    )
}
