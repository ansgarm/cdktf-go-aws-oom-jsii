import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontOriginAccessIdentityConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity.html#comment CloudfrontOriginAccessIdentity#comment}.
     */
    readonly comment?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity.html aws_cloudfront_origin_access_identity}.
 */
export declare class CloudfrontOriginAccessIdentity extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity.html aws_cloudfront_origin_access_identity} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: CloudfrontOriginAccessIdentityConfig);
    get callerReference(): string;
    get cloudfrontAccessIdentityPath(): string;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    get etag(): string;
    get iamArn(): string;
    get id(): string;
    get s3CanonicalUserId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
