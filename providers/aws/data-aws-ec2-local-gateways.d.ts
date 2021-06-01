import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2LocalGatewaysConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateways.html#tags DataAwsEc2LocalGateways#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateways.html#filter DataAwsEc2LocalGateways#filter}
     */
    readonly filter?: DataAwsEc2LocalGatewaysFilter[];
}
export interface DataAwsEc2LocalGatewaysFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateways.html#name DataAwsEc2LocalGateways#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateways.html#values DataAwsEc2LocalGateways#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateways.html aws_ec2_local_gateways}.
 */
export declare class DataAwsEc2LocalGateways extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateways.html aws_ec2_local_gateways} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEc2LocalGatewaysConfig);
    get id(): string;
    get ids(): string[];
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _filter?;
    get filter(): DataAwsEc2LocalGatewaysFilter[];
    set filter(value: DataAwsEc2LocalGatewaysFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2LocalGatewaysFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
