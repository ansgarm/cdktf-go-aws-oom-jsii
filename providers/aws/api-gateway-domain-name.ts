// https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayDomainNameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_arn ApiGatewayDomainName#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_body ApiGatewayDomainName#certificate_body}
  */
  readonly certificateBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_chain ApiGatewayDomainName#certificate_chain}
  */
  readonly certificateChain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_name ApiGatewayDomainName#certificate_name}
  */
  readonly certificateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_private_key ApiGatewayDomainName#certificate_private_key}
  */
  readonly certificatePrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#domain_name ApiGatewayDomainName#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}
  */
  readonly regionalCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}
  */
  readonly regionalCertificateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#security_policy ApiGatewayDomainName#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#tags ApiGatewayDomainName#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#tags_all ApiGatewayDomainName#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * endpoint_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#endpoint_configuration ApiGatewayDomainName#endpoint_configuration}
  */
  readonly endpointConfiguration?: ApiGatewayDomainNameEndpointConfiguration[];
  /**
  * mutual_tls_authentication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#mutual_tls_authentication ApiGatewayDomainName#mutual_tls_authentication}
  */
  readonly mutualTlsAuthentication?: ApiGatewayDomainNameMutualTlsAuthentication[];
}
export interface ApiGatewayDomainNameEndpointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#types ApiGatewayDomainName#types}
  */
  readonly types: string[];
}

function apiGatewayDomainNameEndpointConfigurationToTerraform(struct?: ApiGatewayDomainNameEndpointConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.types),
  }
}

export interface ApiGatewayDomainNameMutualTlsAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#truststore_uri ApiGatewayDomainName#truststore_uri}
  */
  readonly truststoreUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#truststore_version ApiGatewayDomainName#truststore_version}
  */
  readonly truststoreVersion?: string;
}

function apiGatewayDomainNameMutualTlsAuthenticationToTerraform(struct?: ApiGatewayDomainNameMutualTlsAuthentication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    truststore_uri: cdktf.stringToTerraform(struct!.truststoreUri),
    truststore_version: cdktf.stringToTerraform(struct!.truststoreVersion),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html aws_api_gateway_domain_name}
*/
export class ApiGatewayDomainName extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html aws_api_gateway_domain_name} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayDomainNameConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayDomainNameConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_domain_name',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateArn = config.certificateArn;
    this._certificateBody = config.certificateBody;
    this._certificateChain = config.certificateChain;
    this._certificateName = config.certificateName;
    this._certificatePrivateKey = config.certificatePrivateKey;
    this._domainName = config.domainName;
    this._regionalCertificateArn = config.regionalCertificateArn;
    this._regionalCertificateName = config.regionalCertificateName;
    this._securityPolicy = config.securityPolicy;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._endpointConfiguration = config.endpointConfiguration;
    this._mutualTlsAuthentication = config.mutualTlsAuthentication;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string;
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string ) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn
  }

  // certificate_body - computed: false, optional: true, required: false
  private _certificateBody?: string;
  public get certificateBody() {
    return this.getStringAttribute('certificate_body');
  }
  public set certificateBody(value: string ) {
    this._certificateBody = value;
  }
  public resetCertificateBody() {
    this._certificateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBodyInput() {
    return this._certificateBody
  }

  // certificate_chain - computed: false, optional: true, required: false
  private _certificateChain?: string;
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string ) {
    this._certificateChain = value;
  }
  public resetCertificateChain() {
    this._certificateChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain
  }

  // certificate_name - computed: false, optional: true, required: false
  private _certificateName?: string;
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string ) {
    this._certificateName = value;
  }
  public resetCertificateName() {
    this._certificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName
  }

  // certificate_private_key - computed: false, optional: true, required: false
  private _certificatePrivateKey?: string;
  public get certificatePrivateKey() {
    return this.getStringAttribute('certificate_private_key');
  }
  public set certificatePrivateKey(value: string ) {
    this._certificatePrivateKey = value;
  }
  public resetCertificatePrivateKey() {
    this._certificatePrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePrivateKeyInput() {
    return this._certificatePrivateKey
  }

  // certificate_upload_date - computed: true, optional: false, required: false
  public get certificateUploadDate() {
    return this.getStringAttribute('certificate_upload_date');
  }

  // cloudfront_domain_name - computed: true, optional: false, required: false
  public get cloudfrontDomainName() {
    return this.getStringAttribute('cloudfront_domain_name');
  }

  // cloudfront_zone_id - computed: true, optional: false, required: false
  public get cloudfrontZoneId() {
    return this.getStringAttribute('cloudfront_zone_id');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // regional_certificate_arn - computed: false, optional: true, required: false
  private _regionalCertificateArn?: string;
  public get regionalCertificateArn() {
    return this.getStringAttribute('regional_certificate_arn');
  }
  public set regionalCertificateArn(value: string ) {
    this._regionalCertificateArn = value;
  }
  public resetRegionalCertificateArn() {
    this._regionalCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalCertificateArnInput() {
    return this._regionalCertificateArn
  }

  // regional_certificate_name - computed: false, optional: true, required: false
  private _regionalCertificateName?: string;
  public get regionalCertificateName() {
    return this.getStringAttribute('regional_certificate_name');
  }
  public set regionalCertificateName(value: string ) {
    this._regionalCertificateName = value;
  }
  public resetRegionalCertificateName() {
    this._regionalCertificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalCertificateNameInput() {
    return this._regionalCertificateName
  }

  // regional_domain_name - computed: true, optional: false, required: false
  public get regionalDomainName() {
    return this.getStringAttribute('regional_domain_name');
  }

  // regional_zone_id - computed: true, optional: false, required: false
  public get regionalZoneId() {
    return this.getStringAttribute('regional_zone_id');
  }

  // security_policy - computed: true, optional: true, required: false
  private _securityPolicy?: string;
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }
  public get tagsAll(): { [key: string]: string } {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // endpoint_configuration - computed: false, optional: true, required: false
  private _endpointConfiguration?: ApiGatewayDomainNameEndpointConfiguration[];
  public get endpointConfiguration() {
    return this.interpolationForAttribute('endpoint_configuration') as any;
  }
  public set endpointConfiguration(value: ApiGatewayDomainNameEndpointConfiguration[] ) {
    this._endpointConfiguration = value;
  }
  public resetEndpointConfiguration() {
    this._endpointConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigurationInput() {
    return this._endpointConfiguration
  }

  // mutual_tls_authentication - computed: false, optional: true, required: false
  private _mutualTlsAuthentication?: ApiGatewayDomainNameMutualTlsAuthentication[];
  public get mutualTlsAuthentication() {
    return this.interpolationForAttribute('mutual_tls_authentication') as any;
  }
  public set mutualTlsAuthentication(value: ApiGatewayDomainNameMutualTlsAuthentication[] ) {
    this._mutualTlsAuthentication = value;
  }
  public resetMutualTlsAuthentication() {
    this._mutualTlsAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutualTlsAuthenticationInput() {
    return this._mutualTlsAuthentication
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_arn: cdktf.stringToTerraform(this._certificateArn),
      certificate_body: cdktf.stringToTerraform(this._certificateBody),
      certificate_chain: cdktf.stringToTerraform(this._certificateChain),
      certificate_name: cdktf.stringToTerraform(this._certificateName),
      certificate_private_key: cdktf.stringToTerraform(this._certificatePrivateKey),
      domain_name: cdktf.stringToTerraform(this._domainName),
      regional_certificate_arn: cdktf.stringToTerraform(this._regionalCertificateArn),
      regional_certificate_name: cdktf.stringToTerraform(this._regionalCertificateName),
      security_policy: cdktf.stringToTerraform(this._securityPolicy),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      endpoint_configuration: cdktf.listMapper(apiGatewayDomainNameEndpointConfigurationToTerraform)(this._endpointConfiguration),
      mutual_tls_authentication: cdktf.listMapper(apiGatewayDomainNameMutualTlsAuthenticationToTerraform)(this._mutualTlsAuthentication),
    };
  }
}
