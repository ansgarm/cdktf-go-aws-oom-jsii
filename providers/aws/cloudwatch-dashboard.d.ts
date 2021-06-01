import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchDashboardConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_dashboard.html#dashboard_body CloudwatchDashboard#dashboard_body}.
     */
    readonly dashboardBody: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_dashboard.html#dashboard_name CloudwatchDashboard#dashboard_name}.
     */
    readonly dashboardName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_dashboard.html aws_cloudwatch_dashboard}.
 */
export declare class CloudwatchDashboard extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_dashboard.html aws_cloudwatch_dashboard} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudwatchDashboardConfig);
    get dashboardArn(): string;
    private _dashboardBody;
    get dashboardBody(): string;
    set dashboardBody(value: string);
    get dashboardBodyInput(): string;
    private _dashboardName;
    get dashboardName(): string;
    set dashboardName(value: string);
    get dashboardNameInput(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
