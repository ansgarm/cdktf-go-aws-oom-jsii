import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsArnConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/arn.html#arn DataAwsArn#arn}.
     */
    readonly arn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/arn.html aws_arn}.
 */
export declare class DataAwsArn extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/arn.html aws_arn} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsArnConfig);
    get account(): string;
    private _arn;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get id(): string;
    get partition(): string;
    get region(): string;
    get resource(): string;
    get service(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
