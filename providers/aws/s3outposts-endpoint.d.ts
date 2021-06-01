import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3OutpostsEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3outposts_endpoint.html#outpost_id S3OutpostsEndpoint#outpost_id}.
     */
    readonly outpostId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3outposts_endpoint.html#security_group_id S3OutpostsEndpoint#security_group_id}.
     */
    readonly securityGroupId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3outposts_endpoint.html#subnet_id S3OutpostsEndpoint#subnet_id}.
     */
    readonly subnetId: string;
}
export declare class S3OutpostsEndpointNetworkInterfaces extends cdktf.ComplexComputedList {
    get networkInterfaceId(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3outposts_endpoint.html aws_s3outposts_endpoint}.
 */
export declare class S3OutpostsEndpoint extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3outposts_endpoint.html aws_s3outposts_endpoint} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: S3OutpostsEndpointConfig);
    get arn(): string;
    get cidrBlock(): string;
    get creationTime(): string;
    get id(): string;
    networkInterfaces(index: string): S3OutpostsEndpointNetworkInterfaces;
    private _outpostId;
    get outpostId(): string;
    set outpostId(value: string);
    get outpostIdInput(): string;
    private _securityGroupId;
    get securityGroupId(): string;
    set securityGroupId(value: string);
    get securityGroupIdInput(): string;
    private _subnetId;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
