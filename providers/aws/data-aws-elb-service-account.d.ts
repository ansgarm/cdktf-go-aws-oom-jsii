import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsElbServiceAccountConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elb_service_account.html#region DataAwsElbServiceAccount#region}.
     */
    readonly region?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elb_service_account.html aws_elb_service_account}.
 */
export declare class DataAwsElbServiceAccount extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elb_service_account.html aws_elb_service_account} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsElbServiceAccountConfig);
    get arn(): string;
    get id(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
